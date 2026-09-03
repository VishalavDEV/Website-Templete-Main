(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const c=[{id:"cliffside-residence",name:"The Royal Cliffside Residence",subtitle:"Perched 100m atop Uluwatu's sacred ocean limestone cliffs",category:"Signature Villa",priceUSD:1450,squareMeters:380,maxGuests:4,bedType:"King Master Suite + Private Guest Wing",rating:4.98,reviews:128,image:"https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85",amenities:["24-Hour Dedicated Butler","Private Infinity Plunge Pool","Bose & Bang Olufsen Acoustics","Daily In-Villa Organic Breakfast"]},{id:"ocean-pool-villa",name:"Oceanfront Sunset Sanctuary Villa",subtitle:"Direct front-row vantage point for Bali's most revered sunsets",category:"Signature Villa",priceUSD:1150,squareMeters:260,maxGuests:3,bedType:"Grand King Bed with Silk Linens",rating:4.96,reviews:94,image:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85",amenities:["Private Saltwater Infinity Pool","Wine Cellar with Curated Grand Crus","Daily Sound Healing in Villa","Outdoor Rainfall Shower"]},{id:"garden-pavilion",name:"Ayurvedic Botanical Garden Pavilion",subtitle:"Enveloped in ancient sacred banyan trees and herbal gardens",category:"Sanctuary Suite",priceUSD:820,squareMeters:195,maxGuests:2,bedType:"Handcrafted Teak King Bed",rating:4.93,reviews:76,image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",amenities:["Volcanic Stone Hot Bath","Private Meditation Deck","In-Suite Steam Room","Organic Custom Herbal Infusions"]},{id:"waterfront-villa",name:"Azure Waterfront Coral Villa",subtitle:"Gentle ocean waves soundscape with private cliff-path access",category:"Waterfront Villa",priceUSD:1280,squareMeters:310,maxGuests:4,bedType:"Two Deluxe King Bedrooms",rating:4.97,reviews:112,image:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=85",amenities:["Direct Private Beach Path Access","Cliffside Fire Pit Service","Glass-Bottom Lounge Pavilion","Chauffeured Buggy Service"]},{id:"canopy-forest-suite",name:"Canopy Cloud Penthouse Suite",subtitle:"Elevated above the Uluwatu tree canopy with 360-degree vistas",category:"Sanctuary Suite",priceUSD:960,squareMeters:220,maxGuests:2,bedType:"Floating Circular King Bed",rating:4.95,reviews:88,image:"https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",amenities:["Cedarwood Onsen Soaking Tub","High-Definition Stargazing Telescope","Retractable Curved Glass Walls","Craft Kombucha Bar"]},{id:"presidential-ulu-estate",name:"The Uluwatu Presidential Ocean Estate",subtitle:"The pinnacle of luxury in Southeast Asia, spanning 850 sqm",category:"Signature Villa",priceUSD:3200,squareMeters:850,maxGuests:8,bedType:"4 Master Suites with Ocean Balconies",rating:5,reviews:64,image:"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85",amenities:["35m Multi-Level Infinity Pool","Dedicated Michelin Private Chef","24/7 Team of 3 Private Butlers","Private Subterranean Wine Cave"]}],v={USD:{symbol:"$",rate:1},EUR:{symbol:"€",rate:.92},GBP:{symbol:"£",rate:.79},IDR:{symbol:"Rp ",rate:16200}};let d=localStorage.getItem("suara_currency")||"USD",h=localStorage.getItem("suara_theme")||"light";function s(e){const a=v[d]||v.USD,t=e*a.rate;return d==="IDR"?`${a.symbol}${Math.round(t).toLocaleString("id-ID")}`:`${a.symbol}${Math.round(t).toLocaleString("en-US")}`}function w(){document.documentElement.setAttribute("data-theme",h);const e=document.getElementById("themeToggleBtn");e&&(e.innerHTML=h==="light"?"🌙":"☀️")}function B(){const e=document.getElementById("currencySelect");e&&(e.value=d,e.addEventListener("change",a=>{d=a.target.value,localStorage.setItem("suara_currency",d),b(),m()}))}window.addEventListener("scroll",()=>{const e=document.getElementById("suHeader");e&&(window.scrollY>40?e.classList.add("scrolled"):e.classList.remove("scrolled"))});function b(){const e=document.getElementById("suitesGrid");if(!e)return;const a=c;e.innerHTML=a.map(t=>`
    <div class="glass-panel card-elevation-3d sheen-container" style="border-radius: 28px; background: var(--bg-card); overflow: hidden; display: flex; flex-direction: column; border: 1px solid var(--border-luxury);">
      
      <!-- Top Arched Photo -->
      <div style="position: relative; height: 280px; margin: 0.85rem 0.85rem 0 0.85rem; overflow: hidden;">
        <img src="${t.image}" alt="${t.name}" class="arch-top" style="width: 100%; height: 100%; object-fit: cover;">
        
        <div style="position: absolute; top: 1rem; left: 1rem; background: rgba(13,12,10,0.8); backdrop-filter: blur(10px); color: var(--accent-gold); padding: 0.35rem 0.9rem; border-radius: 9999px; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em; border: 1px solid rgba(216,183,141,0.3);">
          ${t.category}
        </div>

        <div style="position: absolute; top: 1rem; right: 1rem; background: rgba(13,12,10,0.8); backdrop-filter: blur(10px); color: #FFF; padding: 0.35rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; display: flex; align-items: center; gap: 0.3rem;">
          <span style="color: var(--accent-gold);">★</span> ${t.rating.toFixed(2)} <span style="opacity: 0.6;">(${t.reviews})</span>
        </div>
      </div>

      <!-- Details -->
      <div style="padding: 1.6rem; display: flex; flex-direction: column; flex-grow: 1;">
        <h3 style="font-size: 1.48rem; font-weight: 600; margin-bottom: 0.35rem; color: var(--text-primary); font-family: var(--font-serif);">${t.name}</h3>
        <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 1.2rem; min-height: 38px; line-height: 1.5;">${t.subtitle}</p>

        <!-- Specs -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; padding: 0.85rem 0.5rem; background: var(--bg-secondary); border-radius: 14px; margin-bottom: 1.2rem; text-align: center;">
          <div><strong style="font-size: 0.76rem; color: var(--text-primary); display: block;">${t.squareMeters} m²</strong><span style="font-size: 0.7rem; color: var(--text-muted);">Area</span></div>
          <div><strong style="font-size: 0.76rem; color: var(--text-primary); display: block;">${t.maxGuests} Guests</strong><span style="font-size: 0.7rem; color: var(--text-muted);">Capacity</span></div>
          <div><strong style="font-size: 0.76rem; color: var(--text-primary); display: block;">King Suite</strong><span style="font-size: 0.7rem; color: var(--text-muted);">Bedding</span></div>
        </div>

        <!-- Amenities -->
        <div style="display: flex; flex-direction: column; gap: 0.45rem; margin-bottom: 1.5rem; flex-grow: 1;">
          ${t.amenities.map(r=>`
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--text-secondary);">
              <span style="color: var(--accent-gold); font-size: 0.8rem;">✓</span>
              <span>${r}</span>
            </div>
          `).join("")}
        </div>

        <!-- Price & Trigger -->
        <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 1.2rem; border-top: 1px solid var(--border-subtle); margin-top: auto;">
          <div>
            <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted);">Starting From</div>
            <div style="font-size: 1.45rem; font-weight: 700; color: var(--accent-gold); font-family: var(--font-serif);">${s(t.priceUSD)} <span style="font-size: 0.76rem; font-family: var(--font-sans); color: var(--text-muted); font-weight: 400;">/ night</span></div>
          </div>
          <button onclick="openBookingModal('${t.id}')" class="btn-gold" style="padding: 0.65rem 1.3rem; font-size: 0.76rem;">
            <span>Reserve</span> →
          </button>
        </div>

      </div>
    </div>
  `).join("")}function m(){var p,f,y;const e=document.getElementById("modalRoomSelect");if(!e)return;const a=c.find(x=>x.id===e.value)||c[0],t=new Date(document.getElementById("modalCheckIn").value||"2026-09-15"),r=new Date(document.getElementById("modalCheckOut").value||"2026-09-19"),i=Math.abs(r-t),n=Math.max(1,Math.ceil(i/(1e3*60*60*24))||4),o=a.priceUSD*n;let l=0;(p=document.getElementById("addonMercedes"))!=null&&p.checked&&(l+=220),(f=document.getElementById("addonDom"))!=null&&f.checked&&(l+=480),(y=document.getElementById("addonSpa"))!=null&&y.checked&&(l+=350*n);const u=o+l,g=u*.15,S=u+g;document.getElementById("billNights").textContent=`${n} Nights`,document.getElementById("billRoomRate").textContent=s(o),document.getElementById("billAddons").textContent=s(l),document.getElementById("billTax").textContent=s(g),document.getElementById("billGrandTotal").textContent=s(S)}document.addEventListener("DOMContentLoaded",()=>{w(),B(),b();const e=document.getElementById("modalRoomSelect");e&&(e.innerHTML=c.map(a=>`
      <option value="${a.id}">${a.name} — ${s(a.priceUSD)} / night</option>
    `).join(""),e.addEventListener("change",m)),["modalCheckIn","modalCheckOut","addonMercedes","addonDom","addonSpa"].forEach(a=>{const t=document.getElementById(a);t&&t.addEventListener("change",m)})});
