<template></template>

<script>
// const puppeteer = import 'puppeteer'

export default {
  name: "test",
  methods: {
    testy() {
      const browser = puppeteer.launch();
      console.log(browser);
    },
  },
  created() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let url =
      "http://sweetgum.nybg.org/science/vh/specimen-list/?DarFamily=Orchidaceae&DetGenusLocal_tab=Aa&DetSpeciesLocal_tab=argyrolepis&ImagesOnly=yes";
    // axios.get('http://sweetgum.nybg.org/science/vh/specimen-list/?DarFamily=Orchidaceae&DetGenusLocal_tab=Aa&DetSpeciesLocal_tab=argyrolepis&ImagesOnly=yes',
    axios
      .get(proxyurl + url)
      // headers = headers)
      .then((data) => {
        console.log(data.data);
        let domparser = new DOMParser();
        let doc = domparser.parseFromString(data.data, "text/html");
        const rows = doc.querySelectorAll("table.table-results tbody tr");
        console.log(rows);
        rows.forEach((row) => {
          console.log(row.querySelector("img").getAttribute("src"));
        });
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
</style>
