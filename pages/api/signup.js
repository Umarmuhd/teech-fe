import { API_URL } from "@/config/index";

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    const body = JSON.stringify({
      name,
      email,
      password,
      address: "default address",
    });

    try {
      const apiRes = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: body,
      });

      const data = await apiRes.json();

      if (apiRes.status === 201) {
        res.setHeader(
          "Set-Cookie",
          cookie.serialize("token", data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60 * 60 * 24 * 1, // 1 day
            sameSite: "strict",
            path: "/",
          })
        );
        return res.status(201).json({ success: "success", user: data.user });
      } else {
        return res.status(apiRes.status).json({
          error: data.error,
        });
      }
    } catch (err) {
      return res.status(500).json({
        error: "Something went wrong when registering for an account",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};
