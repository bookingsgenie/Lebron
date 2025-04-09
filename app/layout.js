export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Chatbase Widget Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.chatbaseConfig = {
                chatbotId: "cltcqkqlg0004me2y5sz8b9qj"
              };
            `,
          }}
        />
        <script
          src="https://www.chatbase.co/embed.min.js"
          id="chatbase-script"
          defer
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
