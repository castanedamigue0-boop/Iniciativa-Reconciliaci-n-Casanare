function mostrarSeccion(id, el) {
  event.preventDefault();
  document.querySelectorAll('.seccion-panel').forEach(s => s.classList.remove('activa'));
  document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
  document.getElementById('sec-' + id).classList.add('activa');
  el.classList.add('active');

  // Cambiar fondo según sección
  if (id === 'inicio') {
    document.body.style.backgroundImage = "url('imagenes/principal/imagenprincipal/WhatsApp Image 2026-03-23 at 4.09.01 PM (1).jpeg')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
  } else {
    document.body.style.backgroundImage = 'linear-gradient(135deg, #c8102e 0%, #8b0000 40%, #1a5c2a 70%, #0d3318 100%)';
    document.body.style.backgroundSize = 'auto';
    document.body.style.backgroundPosition = 'initial';
    document.body.style.backgroundAttachment = 'fixed';
  }
}

function abrirLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function cerrarLightbox() {
  document.getElementById('lightbox').style.display = 'none';
  document.getElementById('lightbox-img').src = '';
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') cerrarLightbox();
});

