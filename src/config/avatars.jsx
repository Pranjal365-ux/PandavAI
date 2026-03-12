export const AvatarBhima = ({ size = 38 }) => (
  <svg viewBox="0 0 38 38" width={size} height={size}>
    <rect width="38" height="38" fill="#1a0e08"/>
    <ellipse cx="19" cy="15" rx="8" ry="9" fill="#c07848"/>
    <ellipse cx="19" cy="13" rx="5" ry="6" fill="#d4916a"/>
    <rect x="9" y="24" width="20" height="14" rx="2" fill="#8a2020"/>
    <ellipse cx="14" cy="24" rx="4" ry="5" fill="#c07848"/>
    <ellipse cx="24" cy="24" rx="4" ry="5" fill="#c07848"/>
    <rect x="11" y="3" width="16" height="8" rx="8" fill="#3a2010"/>
    <path d="M11 8 Q19 4 27 8" stroke="#c8922a" strokeWidth="1" fill="none" opacity="0.6"/>
  </svg>
)

export const AvatarSahadeva = ({ size = 38 }) => (
  <svg viewBox="0 0 38 38" width={size} height={size}>
    <rect width="38" height="38" fill="#080e1a"/>
    <ellipse cx="19" cy="15" rx="8" ry="9" fill="#8090b0"/>
    <ellipse cx="19" cy="13" rx="5" ry="6" fill="#a0b0d0"/>
    <rect x="9" y="24" width="20" height="14" rx="2" fill="#1a3060"/>
    <ellipse cx="14" cy="24" rx="4" ry="5" fill="#8090b0"/>
    <ellipse cx="24" cy="24" rx="4" ry="5" fill="#8090b0"/>
    <rect x="11" y="3" width="16" height="8" rx="8" fill="#101830"/>
    <path d="M11 8 Q19 4 27 8" stroke="#6080c0" strokeWidth="1" fill="none" opacity="0.7"/>
    <circle cx="19" cy="5" r="2" fill="#2060a0" opacity="0.8"/>
  </svg>
)

export const AvatarArjuna = ({ size = 38 }) => (
  <svg viewBox="0 0 38 38" width={size} height={size}>
    <rect width="38" height="38" fill="#081408"/>
    <ellipse cx="19" cy="15" rx="8" ry="9" fill="#709060"/>
    <ellipse cx="19" cy="13" rx="5" ry="6" fill="#90b080"/>
    <rect x="9" y="24" width="20" height="14" rx="2" fill="#184030"/>
    <ellipse cx="14" cy="24" rx="4" ry="5" fill="#709060"/>
    <ellipse cx="24" cy="24" rx="4" ry="5" fill="#709060"/>
    <rect x="11" y="3" width="16" height="8" rx="8" fill="#102010"/>
    <path d="M11 8 Q19 4 27 8" stroke="#40b060" strokeWidth="1" fill="none" opacity="0.7"/>
    <path d="M26 20 L32 14" stroke="#c8d040" strokeWidth="1.5" opacity="0.8"/>
  </svg>
)

export const AvatarYudhi = ({ size = 38 }) => (
  <svg viewBox="0 0 38 38" width={size} height={size}>
    <rect width="38" height="38" fill="#140e00"/>
    <ellipse cx="19" cy="15" rx="8" ry="9" fill="#b09060"/>
    <ellipse cx="19" cy="13" rx="5" ry="6" fill="#d0b080"/>
    <rect x="9" y="24" width="20" height="14" rx="2" fill="#604010"/>
    <ellipse cx="14" cy="24" rx="4" ry="5" fill="#b09060"/>
    <ellipse cx="24" cy="24" rx="4" ry="5" fill="#b09060"/>
    <rect x="11" y="3" width="16" height="8" rx="8" fill="#2a1a00"/>
    <path d="M11 8 Q19 4 27 8" stroke="#c8a030" strokeWidth="1.2" fill="none" opacity="0.8"/>
    <polygon points="19,1 20.5,5 24,5 21.2,7.2 22.3,11 19,8.8 15.7,11 16.8,7.2 14,5 17.5,5"
      fill="#c8922a" opacity="0.9" transform="scale(0.55) translate(15,-1)"/>
  </svg>
)

export const AvatarNakula = ({ size = 38 }) => (
  <svg viewBox="0 0 38 38" width={size} height={size}>
    <rect width="38" height="38" fill="#100814"/>
    <ellipse cx="19" cy="15" rx="8" ry="9" fill="#9070a0"/>
    <ellipse cx="19" cy="13" rx="5" ry="6" fill="#b090c0"/>
    <rect x="9" y="24" width="20" height="14" rx="2" fill="#401050"/>
    <ellipse cx="14" cy="24" rx="4" ry="5" fill="#9070a0"/>
    <ellipse cx="24" cy="24" rx="4" ry="5" fill="#9070a0"/>
    <rect x="11" y="3" width="16" height="8" rx="8" fill="#200830"/>
    <path d="M11 8 Q19 4 27 8" stroke="#c060e0" strokeWidth="1" fill="none" opacity="0.7"/>
    <circle cx="15" cy="13" r="1" fill="#e0c0ff" opacity="0.9"/>
    <circle cx="23" cy="13" r="1" fill="#e0c0ff" opacity="0.9"/>
  </svg>
)

export const AvatarKrishna = ({ size = 38 }) => (
  <svg viewBox="0 0 38 38" width={size} height={size}>
    <rect width="38" height="38" fill="#0a0610"/>
    <ellipse cx="19" cy="15" rx="8" ry="9" fill="#3a4f8a"/>
    <ellipse cx="19" cy="13" rx="5" ry="6" fill="#5070b0"/>
    <rect x="9" y="24" width="20" height="14" rx="2" fill="#1a0f3a"/>
    <ellipse cx="14" cy="24" rx="4" ry="5" fill="#3a4f8a"/>
    <ellipse cx="24" cy="24" rx="4" ry="5" fill="#3a4f8a"/>
    <rect x="11" y="3" width="16" height="8" rx="8" fill="#0e0820"/>
    <path d="M11 8 Q19 4 27 8" stroke="#c8d840" strokeWidth="1" fill="none" opacity="0.8"/>
    <circle cx="19" cy="4" r="2.5" fill="#f0c030" opacity="0.9"/>
  </svg>
)

export const AVATAR_MAP = {
  bhima:    AvatarBhima,
  sahadeva: AvatarSahadeva,
  arjuna:   AvatarArjuna,
  yudhi:    AvatarYudhi,
  nakula:   AvatarNakula,
  krishna:  AvatarKrishna,
}
