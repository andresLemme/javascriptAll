export function SearchForm() {
  const $searchForm = document.createElement("form");
  const $input = document.createElement("input");
  $searchForm.classList.add("form-search");
  $input.name = "search";
  $input.type = "search";
  $input.placeholder = "Buscar";
  $input.autocomplete = "off";

  $searchForm.appendChild($input);

  document.addEventListener("submit", (e) => {
    if (!e.target.matches("form-search")) return false;
    e.preventDefault();
    localStorage.setItem("wp-Search", e.target.search.value);
    location.hash = `#/search?search=${e.target.search.value}`;
  });
  return $searchForm;
}
