import { db } from "./src/config/db.js";
import axios from "axios";

const updateLatestNav = async () => {
  try {
    const [portfolio] = await db.execute("SELECT code FROM mf_portfolio");

    for (const fund of portfolio) {
      try {
        const { data } = await axios.get(`https://api.kuvera.in/mf/api/v5/fund_schemes/${fund.code}.json`);
        const latest_nav = data[0].nav.nav;

        await db.execute("UPDATE mf_portfolio SET latest_nav = ? WHERE code = ?", [latest_nav, fund.code]);
      } catch (apiError) {
        console.error(`Error fetching/updating data for ${fund.code}:`, apiError.message);
      }
    }
  } catch (dbError) {
    console.error("Error fetching portfolio from the database:", dbError.message);
  }
};

updateLatestNav();
