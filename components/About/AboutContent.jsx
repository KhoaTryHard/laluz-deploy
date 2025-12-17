import AboutIntro from "./AboutIntro";
import AboutFounder from "./AboutFounder";

export default function AboutContent() {
  return (
    <div className="desc-blog mona-content">
      <AboutIntro />
      <AboutFounder />

      {/* các section khác bạn tiếp tục tách component tương tự nếu muốn */}
    </div>
  );
}
