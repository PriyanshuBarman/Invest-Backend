export const registerValidator = (req, res, next) => {
  let { name, email, password } = req.body;

  name = name.trim();
  email = email.trim().toLowerCase();

  if (!name) {
    return res.status(400).json({ success: false, message: "Name required" });
  }
  if (!email) {
    return res.status(400).json({ success: false, message: "Email required" });
  }
  if (!password) {
    return res.status(400).json({ success: false, message: "Password required" });
  }
  if (password.includes(" ")) {
    return res.status(400).json({ success: false, message: "Password should not contain spaces" });
  }

  req.body.name = name;
  req.body.email = email;
  req.body.password = password;

  next();
};


export const loginValidator = (req, res, next) => {
  let { email, password } = req.body;
  console.log(email,password)

  email = email.trim();
  email = email.trim().toLowerCase();

  if (!email) {
    return res.status(400).json({ success: false, message: "Email required" });
  }
  if (!password) {
    return res.status(400).json({ success: false, message: "Password required" });
  }
  if (password.includes(" ")) {
    return res.status(400).json({ success: false, message: "Password should not contain spaces" });
  }

  req.body.email = email;
  req.body.password = password;

  next();
};

