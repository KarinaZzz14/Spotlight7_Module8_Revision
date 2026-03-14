from pathlib import Path
import html
import textwrap

PROJECT_ROOT = Path(__file__).resolve().parents[1]
IMAGES_DIR = PROJECT_ROOT / "images"
IMAGES_DIR.mkdir(exist_ok=True)

VOCAB = [
    ("a_power_station", "a power station", "🏭"),
    ("factory", "factory", "🏭"),
    ("toxic_fumes", "toxic fumes", "💨"),
    ("factory_waste", "factory waste", "🛢️"),
    ("acid_rain", "acid rain", "🌧️"),
    ("polluted_clouds", "polluted clouds", "☁️"),
    ("loss_of_natural_habitats", "loss of natural habitats", "🪵"),
    ("air_water_and_soil_pollution", "air, water and soil pollution", "🌍"),
    ("fish_and_plant_species_dying", "fish and plant species dying", "🐟"),
    ("burn", "burn", "🔥"),
    ("emit", "emit", "💨"),
    ("oxygen", "oxygen", "🍃"),
    ("atmosphere", "atmosphere", "🌐"),
    ("land_verb", "land", "🛬"),
    ("sleet", "sleet", "🌨️"),
    ("wipe_out", "wipe out", "💥"),
    ("poison", "poison", "☠️"),
    ("reduce", "reduce", "📉"),
    ("harmful", "harmful", "⚠️"),
    ("solar_power", "solar power", "☀️"),
    ("heat", "heat", "🌡️"),
    ("plant_flowers", "plant flowers", "🌷"),
    ("recycle_cans", "recycle cans", "♻️"),
    ("collect_rubbish", "collect rubbish", "🗑️"),
    ("build_nesting_boxes", "build nesting boxes", "🐦"),
    ("teach_the_cycle_of_life", "teach the cycle of life", "🔄"),
    ("clean_out_a_pond", "clean out a pond", "🦆"),
    ("read_a_book_about_ecology", "read a book about ecology", "📖"),
    ("a_ladder", "a ladder", "🪜"),
    ("hammer_and_nails", "a hammer and nails", "🔨"),
    ("a_spade", "a spade", "⛏️"),
    ("a_watering_can", "a watering can", "🚿"),
    ("a_rake", "a rake", "🍂"),
    ("a_net", "a net", "🕸️"),
    ("gardening_gloves", "gardening gloves", "🧤"),
    ("plastic_bag", "a plastic bag", "🛍️"),
    ("leave_left", "leave / left", "🚶"),
    ("woods", "woods", "🌲"),
    ("tropical_rainforest", "tropical rainforest", "🌴"),
    ("desert", "desert", "🏜️"),
    ("polar_regions", "polar regions", "🧊"),
    ("wetlands", "wetlands", "🐸"),
    ("savannah", "savannah", "🦁"),
]

PALETTES = [
    ("#dcfce7", "#bbf7d0", "#166534"),
    ("#ecfeff", "#a5f3fc", "#155e75"),
    ("#f0fdf4", "#86efac", "#166534"),
    ("#ecfccb", "#bef264", "#4d7c0f"),
    ("#eff6ff", "#93c5fd", "#1d4ed8"),
    ("#f5f3ff", "#c4b5fd", "#6d28d9"),
    ("#fefce8", "#fde68a", "#a16207"),
    ("#fff7ed", "#fdba74", "#c2410c"),
]

def wrap_label(text: str, width: int = 18):
    return textwrap.wrap(text, width=width)[:3]

def make_svg(word: str, emoji: str, palette):
    bg1, bg2, dark = palette
    safe_word = html.escape(word)
    lines = wrap_label(safe_word, 18)
    line_svg = []

    start_y = 248
    for i, line in enumerate(lines):
      line_svg.append(
          f'<text x="220" y="{start_y + i*26}" text-anchor="middle" '
          f'font-family="Poppins, Arial, sans-serif" font-size="22" '
          f'font-weight="700" fill="{dark}">{html.escape(line)}</text>'
      )

    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="440" height="320" viewBox="0 0 440 320">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="{bg1}" />
      <stop offset="100%" stop-color="{bg2}" />
    </linearGradient>
    <linearGradient id="hill" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#86efac" />
      <stop offset="100%" stop-color="#34d399" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="rgba(0,0,0,0.18)" />
    </filter>
  </defs>

  <rect width="440" height="320" rx="30" fill="url(#bg)" />
  <circle cx="380" cy="56" r="28" fill="rgba(255,255,255,0.55)" />
  <circle cx="70" cy="60" r="18" fill="rgba(255,255,255,0.35)" />
  <circle cx="98" cy="52" r="12" fill="rgba(255,255,255,0.28)" />

  <path d="M0 240 C80 190 150 270 220 230 C290 190 350 250 440 210 L440 320 L0 320 Z" fill="url(#hill)" opacity="0.95" />
  <path d="M0 265 C100 230 180 300 270 255 C330 225 390 265 440 245 L440 320 L0 320 Z" fill="#10b981" opacity="0.65" />

  <g filter="url(#shadow)">
    <rect x="135" y="54" width="170" height="118" rx="28" fill="rgba(255,255,255,0.7)" />
    <text x="220" y="131" text-anchor="middle" dominant-baseline="middle"
      font-size="68" font-family="Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif">{emoji}</text>
  </g>

  <rect x="44" y="28" width="130" height="34" rx="17" fill="rgba(255,255,255,0.55)" />
  <text x="109" y="50" text-anchor="middle" font-family="Poppins, Arial, sans-serif"
    font-size="15" font-weight="700" fill="{dark}">Eco image</text>

  <g>
    {''.join(line_svg)}
  </g>
</svg>"""

def main():
    for idx, (slug, word, emoji) in enumerate(VOCAB):
        palette = PALETTES[idx % len(PALETTES)]
        svg = make_svg(word, emoji, palette)
        (IMAGES_DIR / f"{slug}.svg").write_text(svg, encoding="utf-8")

    fallback = """<svg xmlns="http://www.w3.org/2000/svg" width="440" height="320" viewBox="0 0 440 320">
  <rect width="440" height="320" rx="30" fill="#dcfce7"/>
  <text x="220" y="130" text-anchor="middle" font-size="72">🌿</text>
  <text x="220" y="220" text-anchor="middle" font-size="28" font-family="Arial" fill="#166534">Eco image</text>
</svg>"""
    (IMAGES_DIR / "_fallback.svg").write_text(fallback, encoding="utf-8")
    print(f"Done. Generated {len(VOCAB)} SVG images in: {IMAGES_DIR}")

if __name__ == "__main__":
    main()