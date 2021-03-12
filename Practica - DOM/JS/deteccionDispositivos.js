export default function deviceInfo(id) {
  const $id = document.getElementById(id);

  const isMobile = {
    android: () => {
      navigator.userAgent.match(/android/i);
    },
    ios: () => {
      navigator.userAgent.match(/iphone|ipad|ipod/i);
    },
    window: () => {
      navigator.userAgent.match(/windows phone/i);
    },
    any: function () {
      return this.android() || this.ios() || this.window();
    },
  };
  const isDesktop = {
      linux: () => navigator.userAgent.match(/linux/i),
      windows: () =>  navigator.userAgent.match(/windows nt/i),
      mac: () => navigator.userAgent.match(/mac os/i),
      any: function() {
          return this.linux() || this.windows() || this.mac()
      }
  };
  const isBrowser = {
      chrome: () => navigator.userAgent.match(/chrome/i),
      safari: () => navigator.userAgent.match(/safari/i),
      firefox: () => navigator.userAgent.match(/firefox/i),
      opera: () => navigator.userAgent.match(/opera opera mini/i),
      ie: () => navigator.userAgent.match(/msie|iemobile/i),
      edge: () => navigator.userAgent.match(/edge/i),
      any: function() {
          return( this.chrome() || this.safari() || this.firefox() || this.opera() || this.ie() || this.edge())
      },
  };

//   console.log(isMobile.android());
//   console.log(isMobile.ios());
//   console.log(isMobile.any());
//   console.log(isDesktop.linux());
//   console.log(navigator.userAgent);
$id.innerHTML = `
<ul>
<li>User Agent: <b>${navigator.userAgent}</b></li>
<li>Plataformas: <b>${isMobile.any()? isMobile.any() : isDesktop.any()}</b></li>
<li>Browser: <b>${isBrowser.any()}</b></li>
</ul>
`
$id.style.color = "red",
$id.style.listStyle = "none"

//Contenido exclusivo

if (isBrowser.chrome()) {
 $id.innerHTML += `<p><mark>este es un contenido exclusivo para Chrome</mark></p>`   
};

if (isBrowser.firefox()) {
    $id.innerHTML += `<p><mark>este es un contenido exclusivo para firefox</mark></p>`
};

if (isDesktop.linux()) {
    $id.innerHTML += `<p><mark>Descarga software para linux</mark></p>`
};
if (isDesktop.mac()) {
    $id.innerHTML += `<p><mark>Descarga software para mac</mark></p>`
};
if (isDesktop.windows()) {
    $id.innerHTML += `<p><mark>Descarga software para windows</mark></p>`
};

//Redireccion
if (isMobile.android()) {
    window.location.href = "http://www.teinvito.com.ar/" 
}
}
