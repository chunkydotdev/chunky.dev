import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const { email, name } = await request.json();

		if (!email) {
			return NextResponse.json(
				{ success: false, error: "Email is required" },
				{ status: 400 },
			);
		}

		// Replace with your actual Buttondown API key from environment variables
		const API_KEY = process.env.BUTTONDOWN_API_KEY;

		if (!API_KEY) {
			console.error("Missing Buttondown API key");
			return NextResponse.json(
				{ success: false, error: "Server configuration error" },
				{ status: 500 },
			);
		}

		// Make a request to the Buttondown API
		const response = await fetch(
			"https://api.buttondown.email/v1/subscribers",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Token ${API_KEY}`,
				},
				body: JSON.stringify({
					email,
					notes: name ? `Name: ${name}` : "",
					tags: ["css-newsletter"],
				}),
			},
		);

		const data = await response.json();

		if (!response.ok) {
			// Handle errors from Buttondown API
			return NextResponse.json(
				{
					success: false,
					error: data.detail || "Failed to subscribe",
				},
				{ status: 400 },
			);
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Error subscribing to newsletter:", error);
		return NextResponse.json(
			{ success: false, error: "Internal server error" },
			{ status: 500 },
		);
	}
}
