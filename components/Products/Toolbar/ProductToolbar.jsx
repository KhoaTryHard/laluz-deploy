// export default function ProductToolbar({ title, sortKey, setSortKey }) {
//   return (
//     <div className="flex-mg prod-heading">
//       <h1 className="tt-sec">{title}</h1>

//       <div className="prod-heading-right">
//         <div className="box-slt">
//           <select
//             value={sortKey}
//             onChange={(e) => setSortKey(e.target.value)}
//           >
//             <option value="newest">Mới nhất</option>
//             <option value="priceAsc">Giá tăng dần</option>
//             <option value="priceDesc">Giá giảm dần</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const SORTS = {
  newest: "newest",
  priceAsc: "priceAsc",
  priceDesc: "priceDesc",
};

export default function ProductToolbar({ title, sortKey, setSortKey }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  const options = useMemo(
    () => [
      { key: SORTS.newest, label: "Mới nhất" },
      { key: SORTS.priceAsc, label: "Giá tăng dần" },
      { key: SORTS.priceDesc, label: "Giá giảm dần" },
    ],
    []
  );

  const current = options.find((o) => o.key === sortKey) || options[0];

  // click outside -> đóng dropdown
  useEffect(() => {
    function onDocClick(e) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  function pick(key) {
    setSortKey(key);
    setOpen(false);
  }

  return (
    <div className="flex-mg prod-heading">
      <h1 className="tt-sec">{title}</h1>

      <div className="prod-heading-right" ref={wrapRef}>
        <div className={`box-slt ${open ? "is-open" : ""}`}>
          <button
            type="button"
            className="slt-btn"
            onClick={() => setOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={open}
          >
            <span className="slt-text">{current.label}</span>
            <span className="slt-ico" aria-hidden="true"></span>
          </button>

          <ul className="slt-drop" role="listbox">
            {options.map((opt) => (
              <li
                key={opt.key}
                className={`slt-item ${opt.key === sortKey ? "is-active" : ""}`}
                role="option"
                aria-selected={opt.key === sortKey}
                onClick={() => pick(opt.key)}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
