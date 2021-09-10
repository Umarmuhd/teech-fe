import cookie from "cookie";
import { API_URL } from "@/config/index";

export default async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    const body = JSON.stringify({ email, password });

    try {
      const loginRes = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: body,
      });

      const data = await loginRes.json();

      if (loginRes.status === 200 || loginRes.status === 201) {
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

        return res.status(200).json({
          message: "Logged in successfully",
          user: data.user,
        });
      } else {
        return res.status(loginRes.status).json({
          error: data.error,
        });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        error: "Something went wrong when authenticating",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} now allowed` });
  }
};
