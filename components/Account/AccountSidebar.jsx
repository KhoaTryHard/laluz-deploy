"use client";

import { useState } from "react";
// import { uploadAvatar } from "@/lib/account";

export default function AccountSidebar() {
  const [avatar, setAvatar] = useState(
    "/template/assets/images/default-mona.png"
  );

  async function handleAvatarChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    const preview = await uploadAvatar(file);
    setAvatar(preview);
  }

  return (
    <div className="info-acount-col-left col col-md-3">
      <div className="inner">
        <div className="info-acount-col-left-hd">
          <label className="ava-label">
            <div className="preview-img">
              <span className="button-upload">
                <img src={avatar} className="fileImg img-src" />
              </span>
            </div>

            <input
              type="file"
              className="upload-image"
              accept="image/*"
              hidden
              onChange={handleAvatarChange}
            />
          </label>

          <p className="name">hoanle010299</p>
        </div>

        {/* menu + logout giữ nguyên */}
      </div>
    </div>
  );
}
