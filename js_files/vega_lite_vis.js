var arrivals_vg = "./json_files/arrivals_by_country.vg.json"; 
vegaEmbed("#arrivals_map", arrivals_vg).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);