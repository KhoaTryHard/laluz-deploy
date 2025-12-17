"use client";
import { useState } from "react";

export default function ProductVariation({ options = [] }) {
  const [selected, setSelected] = useState(options[0]?.id);

  return (
    <div className="box-options used" id="monaAttriColor">
      <div
        className="form_data recheck-block taxonomy-pa_dung-tich hasChecked"
        id="taxonomy-pa_dung-tich"
      >
        <p className="tt-option form_label">Dung tích</p>

        <div className="flex-box">
          {options.map((it) => {
            const active = selected === it.id;

            return (
              <div
                key={it.id}
                className={`box-op-it checkbox_item mona-variation-item mona-name-attr ${
                  active ? "active" : "normal"
                } checkbox-item-${it.id} is-loading-group`}
              >
                <input
                  type="radio"
                  id={it.id}
                  name="attribute_pa_dung-tich"
                  value={it.id}
                  checked={active}
                  onChange={() => setSelected(it.id)}
                />
                <label htmlFor={it.id}>{it.label}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
