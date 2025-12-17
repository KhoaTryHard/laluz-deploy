import Image from "next/image";

export default function AboutFounder() {
  return (
    <>
      <h2 className="wp-block-heading" style={{ textAlign: "justify" }}>
        <strong>CEO Chung Thành – Người sáng lập LALUZ Parfums</strong>
      </h2>

      {/* wp-caption aligncenter giống WP */}
      <div
        id="attachment_8849"
        className="wp-caption aligncenter"
        style={{ width: 610 }}
      >
        <Image
          src="https://laluz.vn/wp-content/uploads/2024/06/ceo-chung-thanh-scaled.jpg"
          alt="CEO Chung Thành - Doanh nhân trẻ đứng sau LALUZ Parfums"
          width={600}
          height={900}
          style={{ height: "auto" }}
        />
        <p id="caption-attachment-8849" className="wp-caption-text">
          CEO Chung Thành – Doanh nhân trẻ đứng sau LALUZ Parfums
        </p>
      </div>

      <p style={{ textAlign: "justify" }}>
        “Thành đến với việc kinh doanh nước hoa một cách rất tình cờ, bắt đầu
        chỉ vì muốn cơ thể luôn mang theo mùi thơm mà mình yêu thích...”
      </p>
    </>
  );
}
