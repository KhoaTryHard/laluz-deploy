"use client";

import { useState } from "react";

export default function ProductInfoTabs({ tabs = [], benefits = [] }) {
  const [active, setActive] = useState(0);

  return (
    <section className="info-prod tabJS">
      <div className="container">
        <div className="row">
          {/* LEFT */}
          <div className="info-prod-it col col-lg-8">
            {/* TAB HEADING */}
            <div className="tab-heading">
              <ul className="tab-heading-list">
                {tabs.map((tab, i) => (
                  <li
                    key={i}
                    className={`tab-heading-item tabBtn ${
                      active === i ? "active current-tab" : ""
                    }`}
                    onClick={() => setActive(i)}
                  >
                    <h3>{tab.title}</h3>
                  </li>
                ))}
              </ul>
            </div>

            {/* TAB CONTENT */}
            {tabs.map((tab, i) => (
              <div
                key={i}
                className="info-dt tabPanel"
                style={{ display: active === i ? "block" : "none" }}
              >
                <div className="inner">
                  <div
                    className="desc-dt mona-content"
                    dangerouslySetInnerHTML={{ __html: tab.content }}
                  />

                  {tab.showMore && <button className="btn">Xem thêm</button>}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="info-prod-it col col-lg-4">
            <div className="box-info">
              <div className="tt">Quyền lợi khách hàng tại LALUZ</div>

              <ul className="info-list">
                {benefits.map((it, i) => (
                  <li className="info-item" key={i}>
                    <div className="ic-info">
                      <img src={it.icon} alt="" />
                    </div>
                    <p className="txt">{it.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
