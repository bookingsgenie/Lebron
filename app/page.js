export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Book More Landscaping Jobs — Automatically 🌿</h1>
        <p className="text-lg mb-6">
          Our smart AI assistant helps landscaping businesses respond to leads 24/7, collect customer info, and book jobs — all without lifting a finger.
        </p>

        <div className="bg-green-100 p-6 rounded-2xl shadow-xl mb-8">
          <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
          <ul className="list-disc text-left list-inside space-y-2">
            <li>📩 Automatically responds to customer messages via website, text, or social media</li>
            <li>📆 Checks your availability and books jobs in your calendar</li>
            <li>🧾 Sends confirmation messages to both you and your client</li>
            <li>✅ Captures customer name, address, service, and preferred time</li>
          </ul>
        </div>

        <div className="bg-white border p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-xl font-medium mb-3">Try It Now</h2>
          <p className="mb-4">Use the AI chat assistant below to simulate a real client conversation.</p>

          <iframe
            src="https://www.chatbase.co/chatbot-iframe/ozOt7XNdptzAxzO8uKJwe"
            width="100%"
            height="500px"
            style={{ border: '1px solid #ccc', borderRadius: '12px' }}
            title="AI Assistant Demo"
            allow="microphone;"
          ></iframe>
        </div>

        <div className="text-left border-t pt-6">
          <h2 className="text-xl font-semibold mb-2">Why It Matters</h2>
          <p className="mb-2">
            Most landscaping businesses lose jobs because they take too long to reply to customer inquiries. With our AI assistant, you can respond in seconds — even while you’re working in the field.
          </p>
          <p className="mb-4">
            Businesses using our tool are booking more jobs without hiring more staff. It’s like having a full-time office assistant, without the cost.
          </p>
          <p><strong>Want to see what it could do for your business?</strong> Let’s set up a free 7-day trial.</p>
        </div>

        <div className="mt-10">
          <a href="mailto:ayman@example.com" className="underline text-green-700">
            📧 Contact Ayman to Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
