
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const feedback = await request.json();

    // Basic validation
    const requiredFields = [
      "fullname",
      "company",
      "email",
      "phoneno",
      "area_of_intrest",
      "message",
    ];

    for (const field of requiredFields) {
      if (
        typeof feedback[field] !== "string" ||
        !feedback[field].trim()
      ) {
        return NextResponse.json(
          { detail: `The ${field} field is required.` },
          { status: 400 }
        );
      }
    }

    // Forward the request to Django
    const djangoUrl = process.env.DJANGO_FEEDBACK_URL;

    if (!djangoUrl) {
      console.error("DJANGO_FEEDBACK_URL is not configured.");

      return NextResponse.json(
        { detail: "The feedback service is not configured." },
        { status: 500 }
      );
    }

    const response = await fetch(djangoUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(feedback),
      signal: AbortSignal.timeout(15000),
      cache: "no-store",
    });

    const responseText = await response.text();

    let result;
    try {
      result = JSON.parse(responseText);
    } catch {
      result = {
        detail: "The feedback service returned an unexpected response.",
      };
    }

    return NextResponse.json(result, {
      status: response.status,
    });
  } catch (error) {
    if (error.name === "TimeoutError") {
      return NextResponse.json(
        { detail: "The feedback service timed out. Please try again." },
        { status: 504 }
      );
    }

    console.error("Feedback submission error:", error);

    return NextResponse.json(
      { detail: "Unable to submit feedback at this time." },
      { status: 502 }
    );
  }
}