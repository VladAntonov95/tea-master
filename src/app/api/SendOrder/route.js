export async function POST(req) {
  const { customerName, customerPhone } = await req.json();

  const orderText = `Покупець: ${customerName}\nТелефон: ${customerPhone}\n\nЗамовлення: ...`;

  const TELEGRAM_API_URL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

  const chatIds = process.env.TELEGRAM_CHAT_IDS.split(",");

  try {
    for (const chatId of chatIds) {
      const messagePayload = {
        chat_id: chatId,
        text: `Нове замовлення:\n${orderText}`,
      };

      const response = await fetch(TELEGRAM_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messagePayload),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(`Error: ${result.description || "Unknown error"}`);
      }
    }

    return new Response(
      JSON.stringify({ message: "Order sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Error sending order:", error);
    return new Response(JSON.stringify({ error: "Error sending order" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
