export default function ProductDescription() {
  return (
    <section className="prod-intro mona-content top-content">
      <div className="container">
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <p><strong>Hương đầu:</strong> Hoa cam...</p>
              <p><strong>Hương giữa:</strong> Hoa nhài...</p>
            `,
          }}
        />
      </div>
    </section>
  );
}
