// script.js — loads events from events.json and shows the next event
async function loadEvents() {
  try {
    const res = await fetch('events.json', {cache: "no-store"});
    if (!res.ok) throw new Error('No events.json found');
    const events = await res.json();
    renderEvents(events);
    showNextEvent(events);
  } catch (err) {
    console.warn('Events not loaded:', err);
    // Fallback demo events
    const demo = [
      { title: "Formation Training", date: "2026-02-07T19:00:00Z", desc: "RNAV & formation practice" },
      { title: "RAF Flyout", date: "2026-02-14T20:00:00Z", desc: "Community flyout across Europe" }
    ];
    renderEvents(demo);
    showNextEvent(demo);
  }
}

function renderEvents(events) {
  const container = document.getElementById('events-list');
  if (!container) return;
  if (!events.length) {
    container.innerHTML = '<p>No upcoming events</p>';
    return;
  }
  container.innerHTML = events.map(e => {
    const d = new Date(e.date);
    return `<div class="event"><strong>${escapeHtml(e.title)}</strong><div class="muted">${isValidDate(d) ? d.toLocaleString() : escapeHtml(e.date)}</div><p>${escapeHtml(e.desc || '')}</p></div>`;
  }).join('');
}

function showNextEvent(events) {
  const el = document.getElementById('next-event');
  if (!el) return;
  const now = Date.now();
  const next = (events || []).map(e => ({...e, ts: new Date(e.date).getTime()}))
    .filter(e => !isNaN(e.ts) && e.ts > now)
    .sort((a,b) => a.ts - b.ts)[0];
  if (!next) {
    el.innerHTML = '<p>No upcoming events</p>';
    return;
  }
  el.innerHTML = `<strong>${escapeHtml(next.title)}</strong><div class="muted">${new Date(next.date).toLocaleString()}</div><p>${escapeHtml(next.desc || '')}</p>`;
}

function isValidDate(d) {
  return d instanceof Date && !isNaN(d.getTime());
}

function escapeHtml(s='') {
  return String(s).replace(/[&<>"']/g, ch => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}

document.addEventListener('DOMContentLoaded', loadEvents);
