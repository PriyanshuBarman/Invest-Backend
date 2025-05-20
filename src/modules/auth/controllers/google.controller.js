import { OAuth2Client } from "google-auth-library";
import { userRepo } from "../../user/repositories/user.repository.js";
import { asyncHandler } from "../../../utils/asyncHandler.utils.js";
import { ApiError } from "../../../utils/ApiError.utils.js";

const client = new OAuth2Client(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "postmessage"
);

export const signinWithGoogle = asyncHandler(async (req, res) => {
  const { code } = req.body;

  const { tokens } = await client.getToken(code);

  const ticket = await client.verifyIdToken({
    idToken: tokens.id_token,
    audience: process.env.CLIENT_ID,
  });

  const { email, name, picture } = ticket.getPayload();

  const userExists = await userRepo.findUnique({ email });
  if (userExists) {
    throw new ApiError(400, "User Already Exists");
  }

  await userRepo.create({ name, email, avatar: picture });

  return res.status(200).json({ success: true, message: "Registered Successfully" });
});
