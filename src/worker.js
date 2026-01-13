export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (url.pathname !== "/count") {
      return new Response("Not Found", { status: 404, headers: corsHeaders });
    }

    const isTest = url.searchParams.get("key") === "test";
    const counterId = isTest ? "test_visits" : "visits";

    await env.DB.prepare(
      "INSERT OR IGNORE INTO counter (id, value) VALUES (?, 0)"
    )
      .bind(counterId)
      .run();

    if (request.method === "POST") {
      await env.DB.prepare(
        "UPDATE counter SET value = value + 1 WHERE id = ?"
      )
        .bind(counterId)
        .run();
    } else if (request.method !== "GET") {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: corsHeaders,
      });
    }

    const row = await env.DB.prepare(
      "SELECT value FROM counter WHERE id = ?"
    )
      .bind(counterId)
      .first();

    return new Response(JSON.stringify({ count: row?.value ?? 0 }), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  },
};
