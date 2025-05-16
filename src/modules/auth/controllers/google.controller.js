import { OAuth2Client } from "google-auth-library";
import { userRepo } from "../../user/repositories/user.repository.js";

const client = new OAuth2Client(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "postmessage"
);

export const signinWithGoogle = async (req, res) => {
  const { code } = req.body;
  try {
    const { tokens } = await client.getToken(code);
    const ticket = await client.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.CLIENT_ID,
    });

    const { email, name, picture } = ticket.getPayload();

    const userExists = await userRepo.findUnique({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "User Already Exists" });
    }

    await userRepo.create({ name, email, avatar: picture });

    res.status(200).json({ success: true, message: "Registered Successfully" });
  } catch (error) {
    res.status(401).json({ message: error, m: "ji" });
  }
};
