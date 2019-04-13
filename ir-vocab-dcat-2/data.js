    function createDatasetPortalsTable() {
      datasetPortalsList = [
      {"ProvidedBy": "", "OrganizationName": "European Data Portal", "DataCatalogue": "CKAN", "Category": "Data Portal", "OrganizationSite": "https://www.europeandataportal.eu/", "Link": "https://joinup.ec.europa.eu/document/report-dcat-ap-use", "Reach": "", "ID": "D01", "Domain": "Cross Domain", "WBGThesaurus": ""}
/*      
      {"ProvidedBy": "Phil Archer", "OrganizationName": "Activist", "DataCatalogue": "proprietary", "Category": "Dataset", "OrganizationSite": "https://data.gg/", "Link": "https://data.gg/developers/health", "Reach": "", "ID": "D01", "Domain": "Healthcare", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1491790"},
      {"ProvidedBy": "Bernadette", "OrganizationName": "Auckland War Memorial Museum Open Data", "DataCatalogue": "CKAN (datahub)", "Category": "Dataset", "OrganizationSite": "http://www.aucklandmuseum.com/", "Link": "https://datahub.io/en/dataset/am-collections-online", "Reach": "New Zeland", "ID": "D02", "Domain": "Cultural Heritage\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1527374"},
      {"ProvidedBy": "Christophe Gu\u00e9ret", "OrganizationName": "BBC", "DataCatalogue": "no", "Category": "Dataset", "OrganizationSite": "http://bbc.co.uk", "Link": "http://shakespeare.acropolis.org.uk/", "Reach": "", "ID": "D03", "Domain": "Literature and Folklore", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1490591"},
      {"ProvidedBy": "Christophe Gu\u00e9ret", "OrganizationName": "BBC", "DataCatalogue": "no", "Category": "Dataset", "OrganizationSite": "http://bbc.co.uk", "Link": "http://acropolis.org.uk/", "Reach": "", "ID": "D04", "Domain": "Education", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1490669"},
      {"ProvidedBy": "Laura Manley", "OrganizationName": "Center for Open Data Enterprise", "DataCatalogue": "no", "Category": "Dataset", "OrganizationSite": "http://opendataimpactmap.org", "Link": "http://opendataimpactmap.org/map.html", "Reach": "Global", "ID": "D05", "Domain": "Impact Analysis", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1519086"},
      {"ProvidedBy": "Jos\u00e9 Marcio Martins Junior", "OrganizationName": "Cetic.br", "DataCatalogue": "no", "Category": "Dataset", "OrganizationSite": "http://cetic.br/", "Link": "http:/cetic.br/tics/usuarios/2014/total-brasil/A/", "Reach": "Brazil", "ID": "D06", "Domain": "Digital Inclusion", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1639317"},
      {"ProvidedBy": "Riccardo Albertoni", "OrganizationName": "CNR-IMATI", "DataCatalogue": "no", "Category": "Dataset", "OrganizationSite": "http://linkeddata.ge.imati.cnr.it/", "Link": "http://linkeddata.ge.imati.cnr.it/services.jsp", "Reach": "Europe", "ID": "D07", "Domain": "Environment", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1490737"},
      {"ProvidedBy": "Riccardo Albertoni", "OrganizationName": "CNR-IMATI", "DataCatalogue": "no", "Category": "Dataset", "OrganizationSite": "http://linkeddata.ge.imati.cnr.it/", "Link": "http://linkeddata.ge.imati.cnr.it/resource/data/dcat-void/EARTh20140604?output=text/turtle", "Reach": "Europe", "ID": "D08", "Domain": "Environment", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1490737"},
      {"ProvidedBy": "Annette", "OrganizationName": "Crunchbase", "DataCatalogue": "proprietary", "Category": "Dataset", "OrganizationSite": "https://www.crunchbase.com", "Link": "http://www0.cs.ucl.ac.uk/staff/w.zhang/cb.html", "Reach": "", "ID": "D09", "Domain": "Finance", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1496328"},
      {"ProvidedBy": "Annette", "OrganizationName": "Crunchbase", "DataCatalogue": "proprietary", "Category": "Dataset", "OrganizationSite": "https://www.crunchbase.com", "Link": "http://www0.cs.ucl.ac.uk/staff/w.zhang/cb.html", "Reach": "", "ID": "D10", "Domain": "Finance", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1496328"},
      {"ProvidedBy": "Christophe Gu\u00e9ret", "OrganizationName": "Data Archiving and Networked Services (DANS)", "DataCatalogue": "proprietary", "Category": "Dataset", "OrganizationSite": "https://dans.knaw.nl", "Link": "https://easy.dans.knaw.nl/ui/home", "Reach": "", "ID": "D11", "Domain": "Archive Documents\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1527648"},
      {"ProvidedBy": "Reinaldo Ferraz", "OrganizationName": "Data.gov", "DataCatalogue": "CKAN", "Category": "Dataset", "OrganizationSite": "http://data.gov", "Link": "http://catalog.data.gov/dataset/consumer-complaint-database", "Reach": "USA", "ID": "D12", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627071"},
      {"ProvidedBy": "Diogo Cortiz", "OrganizationName": "Data.gov.uk", "DataCatalogue": "CKAN", "Category": "Dataset", "OrganizationSite": "http://data.gov.uk", "Link": "https://data.gov.uk/dataset/land-registry-monthly-price-paid-data", "Reach": "UK", "ID": "D13", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627071"},
      {"ProvidedBy": "Williams Alc\u00e2ntara", "OrganizationName": "Data.gov.uk", "DataCatalogue": "CKAN", "Category": "Dataset", "OrganizationSite": "http://data.gov.uk", "Link": "https://data.gov.uk/dataset/land-registry-monthly-price-paid-data", "Reach": "UK", "ID": "D14", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627071"},
      {"ProvidedBy": "Williams Alc\u00e2ntara", "OrganizationName": "Data.gov.uk", "DataCatalogue": "CKAN", "Category": "Dataset", "OrganizationSite": "http://data.gov.uk", "Link": "https://data.gov.uk/dataset/uk-civil-service-high-earners/", "Reach": "UK", "ID": "D15", "Domain": "Government data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627072"},
      {"ProvidedBy": "Phil Archer", "OrganizationName": "Datawheel, Deloitte", "DataCatalogue": "no", "Category": "Dataset", "OrganizationSite": "https://datausa.io/", "Link": "https://datausa.io/about/datasets/", "Reach": "USA", "ID": "D16", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627071"},
      {"ProvidedBy": "Markus Freudenberg", "OrganizationName": "DBpedia", "DataCatalogue": "proprietary (uses DCAT)", "Category": "Dataset", "OrganizationSite": "https://dbpedia.org", "Link": "https://dbpedia.org", "Reach": "Global", "ID": "D17", "Domain": "Cross-domain", "WBGThesaurus": ""},
      {"ProvidedBy": "Bernadette loscio", "OrganizationName": "EMPREL", "DataCatalogue": "CKAN", "Category": "Dataset", "OrganizationSite": "http://www.emprel.gov.br/", "Link": "http://dados.recife.pe.gov.br/dataset/monitoramento-das-areas-de-riscos", "Reach": "Brazil", "ID": "D18", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627071"},
      {"ProvidedBy": "Antoine Isaac", "OrganizationName": "Europeana", "DataCatalogue": "proprietary", "Category": "Data Portal", "OrganizationSite": "http://www.europeana.eu/", "Link": "http://labs.europeana.eu/", "Reach": "Europe", "ID": "D19", "Domain": "Cultural Heritage\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1527374"},
      {"ProvidedBy": "Milos Jovanovik", "OrganizationName": "Faculty of Computer Science and Engineering - Skopje, Macedonia", "DataCatalogue": "CKAN (datahub)", "Category": "Dataset", "OrganizationSite": "http://finki.ukim.mk/en", "Link": "https://datahub.io/dataset/linked-drugs", "Reach": "", "ID": "D20", "Domain": "Pharmaceutical Consumption", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1850134"},
      {"ProvidedBy": "Phil Archer", "OrganizationName": "FAO", "DataCatalogue": "proprietary", "Category": "Dataset", "OrganizationSite": "http://ring.ciard.net/", "Link": "http://ring.ciard.net/chinese-crop-germplasm-information-system-cgris", "Reach": "Global", "ID": "D21", "Domain": "Agriculture and Rural Development", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1490815"},
      {"ProvidedBy": "Martin Alvarez-Espinar", "OrganizationName": "Gijon City Council", "DataCatalogue": "proprietary", "Category": "Dataset", "OrganizationSite": "http://transparencia.gijon.es", "Link": "http://transparencia.gijon.es/risp_datasets/show/busgijontr", "Reach": "Spain", "ID": "D22", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627080"},
      {"ProvidedBy": "F\u00e1bio Rodrigues", "OrganizationName": "Governo de Alagoas", "DataCatalogue": "no", "Category": "Data Portal", "OrganizationSite": "http://transparencia.al.gov.br", "Link": "http://transparencia.al.gov.br/portal/api/exportacao", "Reach": "Brazil", "ID": "D23", "Domain": "Government data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627075"},
      {"ProvidedBy": "F\u00e1bio Rodrigues", "OrganizationName": "Governo de Alagoas", "DataCatalogue": "proprietary", "Category": "Data Portal", "OrganizationSite": "http://transparencia.al.gov.br", "Link": "http://transparencia.al.gov.br/portal/duvidas-frequentes", "Reach": "Brazil", "ID": "D24", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627076"},
      {"ProvidedBy": "F\u00e1bio Rodrigues", "OrganizationName": "Governo de Alagoas", "DataCatalogue": "proprietary", "Category": "Data Portal", "OrganizationSite": "http://transparencia.al.gov.br", "Link": "http://transparencia.al.gov.br/portal/api/licenca-de-uso", "Reach": "Brazil", "ID": "D25", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627077"},
      {"ProvidedBy": "F\u00e1bio Rodrigues", "OrganizationName": "Governo de Alagoas", "DataCatalogue": "proprietary", "Category": "Dataset", "OrganizationSite": "http://transparencia.al.gov.br", "Link": "http://transparencia.al.gov.br/pessoal/servidores-ativos/", "Reach": "Brazil", "ID": "D26", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627071"},
      {"ProvidedBy": "F\u00e1bio Rodrigues", "OrganizationName": "Governo de Alagoas", "DataCatalogue": "proprietary", "Category": "Dataset", "OrganizationSite": "http://transparencia.al.gov.br", "Link": "http://transparencia.al.gov.br/portal/api/pessoal/servidores-ativos/lista-de-servidores", "Reach": "Brazil", "ID": "D27", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627072"},
      {"ProvidedBy": "F\u00e1bio Rodrigues", "OrganizationName": "Governo de Alagoas", "DataCatalogue": "proprietary", "Category": "Dataset", "OrganizationSite": "http://transparencia.al.gov.br", "Link": "http://transparencia.al.gov.br/despesa/json-despesa-acao/", "Reach": "Brazil", "ID": "D28", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627073"},
      {"ProvidedBy": "F\u00e1bio Rodrigues", "OrganizationName": "Governo de Alagoas", "DataCatalogue": "proprietary", "Category": "Dataset", "OrganizationSite": "http://transparencia.al.gov.br", "Link": "http://transparencia.al.gov.br/portal/download-de-dados/pessoal/servidor-ativo", "Reach": "Brazil", "ID": "D29", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627074"},
      {"ProvidedBy": "F\u00e1bio Rodrigues", "OrganizationName": "Governo de Alagoas", "DataCatalogue": "proprietary", "Category": "Dataset", "OrganizationSite": "http://transparencia.al.gov.br", "Link": "http://transparencia.al.gov.br/despesa/json-despesa-acao/", "Reach": "Brazil", "ID": "D30", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627078"},
      {"ProvidedBy": "F\u00e1bio Rodrigues", "OrganizationName": "Governo de Alagoas", "DataCatalogue": "proprietary", "Category": "Dataset", "OrganizationSite": "http://transparencia.al.gov.br", "Link": "http://transparencia.al.gov.br/portal/download-de-dados/despesas/comparativo-de-despesa", "Reach": "Brazil", "ID": "D31", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627079"},
      {"ProvidedBy": "Laufer", "OrganizationName": "IGN - Institut National de L\u00ednformation G\u00e9ographique et Foresti\u00e9re", "DataCatalogue": "no", "Category": "Dataset", "OrganizationSite": "http://data.ign.fr", "Link": "http://data.ign.fr/set/ignf/20140409.trig\n", "Reach": "France", "ID": "D32", "Domain": "Geographic Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627079"},
      {"ProvidedBy": "Laufer", "OrganizationName": "IGN - Institut National de L\u00ednformation G\u00e9ographique et Foresti\u00e9re", "DataCatalogue": "no", "Category": "SPARQL endpoint\n", "OrganizationSite": "http://data.ign.fr", "Link": "http://data.ign.fr/endpoint.html\n", "Reach": "France", "ID": "D33", "Domain": "Geographic Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627079"},
      {"ProvidedBy": "Annette", "OrganizationName": "Kaggle", "DataCatalogue": "proprietary", "Category": "Dataset", "OrganizationSite": "https://www.kaggle.com", "Link": "https://www.kaggle.com/txtrouble/carbon-emissions", "Reach": "", "ID": "D34", "Domain": "Environment", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1490737"},
      {"ProvidedBy": "Annette", "OrganizationName": "Kaggle", "DataCatalogue": "proprietary", "Category": "Dataset", "OrganizationSite": "https://www.kaggle.com", "Link": "https://www.kaggle.com/njitram/d/hugomathien/soccer/exploring-the-incident-data/comments", "Reach": "", "ID": "D35", "Domain": "Sports", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1512923"},
      {"ProvidedBy": "Jefferson Rafael Silva", "OrganizationName": "Minist\u00e9rio do Planejamento, Desenvolvimento e Gest\u00e3o", "DataCatalogue": "CKAN", "Category": "Dataset", "OrganizationSite": "http://dados.gov.br/", "Link": "http://dados.gov.br/contato/", "Reach": "Brazil", "ID": "D36", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627063"},
      {"ProvidedBy": "Jefferson Rafael Silva", "OrganizationName": "Minist\u00e9rio do Planejamento, Desenvolvimento e Gest\u00e3o", "DataCatalogue": "CKAN", "Category": "Dataset", "OrganizationSite": "http://dados.gov.br/", "Link": "http://dados.gov.br/dataset/compras-publicas-do-governo-federal", "Reach": "Brazil", "ID": "D37", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627064"},
      {"ProvidedBy": "Jefferson Rafael Silva", "OrganizationName": "Minist\u00e9rio do Planejamento, Desenvolvimento e Gest\u00e3o", "DataCatalogue": "CKAN", "Category": "Dataset", "OrganizationSite": "http://dados.gov.br/", "Link": "http://dados.gov.br/dataset/dominios-gov-br", "Reach": "Brazil", "ID": "D38", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627065"},
      {"ProvidedBy": "Jefferson Rafael Silva", "OrganizationName": "Minist\u00e9rio do Planejamento, Desenvolvimento e Gest\u00e3o", "DataCatalogue": "CKAN", "Category": "Dataset", "OrganizationSite": "http://dados.gov.br/", "Link": "http://dados.gov.br/dataset/dominios-gov-br/resource/e2ec4c92-bad8-4739-a9e3-42dad967c2cb", "Reach": "Brazil", "ID": "D39", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627066"},
      {"ProvidedBy": "Jefferson Rafael Silva", "OrganizationName": "Minist\u00e9rio do Planejamento, Desenvolvimento e Gest\u00e3o", "DataCatalogue": "CKAN", "Category": "Dataset", "OrganizationSite": "http://dados.gov.br/", "Link": "http://dados.gov.br/dataset/imoveis-dominiais-da-uniao", "Reach": "Brazil", "ID": "D40", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627067"},
      {"ProvidedBy": "Jefferson Rafael Silva", "OrganizationName": "Minist\u00e9rio do Planejamento, Desenvolvimento e Gest\u00e3o", "DataCatalogue": "CKAN", "Category": "Dataset", "OrganizationSite": "http://dados.gov.br/", "Link": "http://dados.gov.br/dataset/ocorrencias-aeronauticas-da-aviacao-civil-brasileira", "Reach": "Brazil", "ID": "D41", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627068"},
      {"ProvidedBy": "Jefferson Rafael Silva", "OrganizationName": "Minist\u00e9rio do Planejamento, Desenvolvimento e Gest\u00e3o", "DataCatalogue": "CKAN", "Category": "Dataset", "OrganizationSite": "http://dados.gov.br/", "Link": "http://dados.gov.br/dataset/orcamento-federal", "Reach": "Brazil", "ID": "D42", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627069"},
      {"ProvidedBy": "Jefferson Rafael Silva", "OrganizationName": "Minist\u00e9rio do Planejamento, Desenvolvimento e Gest\u00e3o", "DataCatalogue": "CKAN", "Category": "Dataset", "OrganizationSite": "http://dados.gov.br/", "Link": "http://dados.gov.br/dataset/promocao-e-apoio-a-eventos-nacionais-de-turismo", "Reach": "Brazil", "ID": "D43", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627070"},
      {"ProvidedBy": "Jefferson Rafael Silva", "OrganizationName": "Minist\u00e9rio do Planejamento, Desenvolvimento e Gest\u00e3o", "DataCatalogue": "CKAN", "Category": "Dataset", "OrganizationSite": "http://dados.gov.br/", "Link": "http://dados.gov.br/dataset/siconv", "Reach": "Brazil", "ID": "D44", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627071"},
      {"ProvidedBy": "Deirdre Lee", "OrganizationName": "National Transport Authority", "DataCatalogue": "CKAN", "Category": "Dataset", "OrganizationSite": "https://data.dublinked.ie/dataset", "Link": "https://data.dublinked.ie/dataset/real-time-passenger-information-rtpi-for-dublin-bus-bus-eireann-luas-and-irish-rail", "Reach": "Ireland", "ID": "D45", "Domain": "Transport", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1495827"},
      {"ProvidedBy": "Annette", "OrganizationName": "NCBI Consensus CDS database", "DataCatalogue": "proprietary", "Category": "Data Portal", "OrganizationSite": "https://www.ncbi.nlm.nih.gov/projects/CCDS/CcdsBrowse.cgi?REQUEST=PAST_ANNOUNCEMENTS", "Link": "https://www.ncbi.nlm.nih.gov/projects/CCDS/CcdsBrowse.cgi?REQUEST=PAST_ANNOUNCEMENTS", "Reach": "", "ID": "D46", "Domain": "Biological Data", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1490923"},
      {"ProvidedBy": "Annette", "OrganizationName": "NOAA data catalog", "DataCatalogue": "CKAN", "Category": "Data Portal", "OrganizationSite": "http://data.noaa.gov", "Link": "http://data.noaa.gov", "Reach": "", "ID": "D47", "Domain": "Environment", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1490737"},
      {"ProvidedBy": "Williams Alc\u00e2ntara", "OrganizationName": "OpenStreetMap", "DataCatalogue": "no", "Category": "Dataset", "OrganizationSite": "https://www.openstreetmap.org/", "Link": "http://wiki.openstreetmap.org/wiki/Planet.osm", "Reach": "Global", "ID": "D48", "Domain": "Geographic Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627079"},
      {"ProvidedBy": "Deirdre Lee", "OrganizationName": "Ordnance Survey Ireland & ADAPT, Trinity College Dublin", "DataCatalogue": "CKAN", "Category": "Dataset", "OrganizationSite": "http://data.geohive.ie/", "Link": "https://data.gov.ie/dataset/osi-national-statutory-boundary-linked-data", "Reach": "Ireland", "ID": "D49", "Domain": "Geographic Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627079"},
      {"ProvidedBy": "Eric Stephan", "OrganizationName": "Pacific Northwest National Laboratory", "DataCatalogue": "no", "Category": "Dataset", "OrganizationSite": "https://rdesc.org/", "Link": "https://rdesc.org/metadata.php?uri=http://rdesc.org/arm/datastream/sgpswatsE25.b1", "Reach": "", "ID": "D50", "Domain": "Scientific Research\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1543184"},
      {"ProvidedBy": "Newton Calegari", "OrganizationName": "Schema.org", "DataCatalogue": "no", "Category": "Vocabulary", "OrganizationSite": "http://schema.org", "Link": "http://schema.org/Organization", "Reach": "Global", "ID": "D51", "Domain": "Cross-domain", "WBGThesaurus": ""},
      {"ProvidedBy": "Gregor Boyd", "OrganizationName": "Scottish Government", "DataCatalogue": "PublishMyData", "Category": "Dataset", "OrganizationSite": "http://statistics.gov.scot", "Link": "http://statistics.gov.scot/data/carbon-footprint", "Reach": "UK", "ID": "D52", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627071"},
      {"ProvidedBy": "Bill Roberts", "OrganizationName": "Scottish Governmet", "DataCatalogue": "PublishMyData", "Category": "Dataset", "OrganizationSite": "http://statistics.gov.scot", "Link": "http://statistics.gov.scot/data/age-at-first-birth", "Reach": "UK", "ID": "D53", "Domain": "Government Data\n", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1627071"},
      {"ProvidedBy": "Eric Stephan", "OrganizationName": "US Department of Energy Atmospheric Radiation Measurement (ARM) Data Archive,  Microwave Radiometer Dataset", "DataCatalogue": "proprietary", "Category": "Dataset", "OrganizationSite": "http://www.archive.arm.gov", "Link": "http://www.archive.arm.gov/arm/Thumbnail2.jsp?datastream=sgpmwrlosB5.b1&startDate=04/21/2009&varName=vap\n", "Reach": "", "ID": "D54", "Domain": "Environment", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1490737"},
      {"ProvidedBy": "Christophe Gu\u00e9ret", "OrganizationName": "Wellcome Trust", "DataCatalogue": "proprietary", "Category": "Dataset", "OrganizationSite": "http://wellcomelibrary.org/", "Link": "http://wellcomelibrary.org/resource/collections/", "Reach": "", "ID": "D55", "Domain": "Digital Libraries", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1639346"},
      {"ProvidedBy": "Newton Calegari", "OrganizationName": "Wikidata", "DataCatalogue": "no", "Category": "Dataset", "OrganizationSite": "http://wikidata.org", "Link": "https://www.wikidata.org/wiki/Wikidata:Data_access", "Reach": "Global", "ID": "D56", "Domain": "Cross-domain", "WBGThesaurus": ""},
      {"ProvidedBy": "Bernadette", "OrganizationName": "World Bank", "DataCatalogue": "proprietary", "Category": "Dataset", "OrganizationSite": "http://data.worldbank.org/", "Link": "http://data.worldbank.org/data-catalog/ed-stats", "Reach": "Global", "ID": "D57", "Domain": "Education", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1490669"},
      {"ProvidedBy": "Ghislain Atemezing", "OrganizationName": "Southampton Open Data Service", "DataCatalogue": "proprietary", "Category": "Data Portal", "OrganizationSite": "http://data.southampton.ac.uk/", "Link": "http://id.southampton.ac.uk/dataset/university-timetable", "Reach": "", "ID": "D58", "Domain": "Educational Administration", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1492991"},
      {"ProvidedBy": "Eric Stephan", "OrganizationName": "CEDA - Center for Environmenatl Data Analysis", "DataCatalogue": "yes", "Category": "Dataset", "OrganizationSite": "http://www.ceda.ac.uk/", "Link": "http://catalogue.ceda.ac.uk/uuid/8fb58cd1a37b4ade8cb5a3f62a240574", "Reach": "", "ID": "D59", "Domain": "Environment", "WBGThesaurus": "http://vocabulary.worldbank.org/thesaurus/1490737"}
*/      
      ]

      datasetPortalsTable = document.getElementById('table-datasetportals');
      var tbody = datasetPortalsTable.getElementsByTagName('tbody')[0];

      var newCell = function(val) { return row.insertCell(row.cells.length).innerHTML = val};
      for (var i = 0; i < datasetPortalsList.length; i++) {
        var obj = datasetPortalsList[i];
        var row = tbody.insertRow(tbody.rows.length); // new row for the table
        var orgId = row.insertCell(row.cells.length);
        orgId.innerHTML = obj['ID'];
        orgId.id = obj['ID'];
        newCell("<a href="+obj['OrganizationSite']+">"+obj['OrganizationName']+"</a>" );
        newCell("<a href="+obj['Link']+">"+obj['Link']+"</a>");
        newCell(obj['Category']);
        newCell(obj['Domain']);
        newCell(obj['DataCatalogue']);
        // newCell(obj['ProvidedBy']);
      }
}

function createBpEvidenceTable(){
  bpEvidenceJson = [
{"bp": "REV1", "evidence": ["V01","V02","V03","V04"]},
{"bp": "REV2", "evidence": []},
{"bp": "REV3", "evidence": []},
{"bp": "REV4", "evidence": []},
{"bp": "REV5", "evidence": []},
{"bp": "REV6", "evidence": []},
{"bp": "REV7", "evidence": []},
{"bp": "REV8", "evidence": []},
{"bp": "REV9", "evidence": []},
{"bp": "REV10", "evidence": []},
{"bp": "REV11", "evidence": []},
{"bp": "REV12", "evidence": []},
{"bp": "REV13", "evidence": []},
{"bp": "REV14", "evidence": []},
{"bp": "REV15", "evidence": []},
{"bp": "REV16", "evidence": []},
{"bp": "REV17", "evidence": []},
{"bp": "REV18", "evidence": []},
{"bp": "REV19", "evidence": []},
{"bp": "REV20", "evidence": []},
{"bp": "REV21", "evidence": []},
{"bp": "REV22", "evidence": []},
{"bp": "REV23", "evidence": []},
{"bp": "REV24", "evidence": []},
{"bp": "REV25", "evidence": []},
{"bp": "REV26", "evidence": ["V01","V02","V03","V04"]},
{"bp": "REV27", "evidence": ["V01","V02","V03","V04","D01","G02"]},
{"bp": "REV28", "evidence": []},
{"bp": "REV29", "evidence": ["V01","V02","V03","V04","D01","G02"]},
{"bp": "REV30", "evidence": []},
{"bp": "REV31", "evidence": []},
{"bp": "REV32", "evidence": []},
{"bp": "REV33", "evidence": []},
{"bp": "REV34", "evidence": []},
{"bp": "REV35", "evidence": []},
{"bp": "REV36", "evidence": []},
{"bp": "REV37", "evidence": []},
{"bp": "REV38", "evidence": []},
{"bp": "REV39", "evidence": []},
/*  
    {"bp": "BP1", "evidence": ["D02", "D03", "D04", "D06", "D08", "D11", "D12", "D13", "D17", "D18", "D19", "D20", "D21", "D22", "D31", "D38", "D45", "D49", "D50", "D51", "D52", "D53", "D55", "D55", "D56", "D57", "D58", "D59", "R10","G03", "G04", "G07", "G08", "G09", "G11", "G13", "G14", "G15", "G16"]},
    {"bp": "BP2", "evidence": ["D02", "D06", "D08", "D11", "D12", "D13", "D17", "D19", "D20", "D21", "D22", "D23", "D38", "D45", "D49", "D50", "D51", "D52", "D53", "D54", "D56", "D57", "D58", "D59", "R10","G01", "G07", "G08", "G11", "G13", "G14", "G15", "G16"]},
    {"bp": "BP3", "evidence": ["D04", "D06", "D08", "D17", "D20", "D21", "D31", "D45", "D49", "D50", "D52", "D59", "R10","G01", "G02", "G03", "G07", "G08", "G16"]},
    {"bp": "BP4", "evidence": ["D02", "D03", "D04", "D05", "D08", "D11", "D12", "D13", "D17",  "D20", "D22", "D25", "D38", "D45", "D49", "D51", "D52", "D53", "D55", "D56", "D58", "D59", "G01", "G02", "G03", "G08", "G10", "G13", "G15", "G16"]},
    {"bp": "BP5", "evidence": ["D01", "D06", "D11", "D12", "D13", "D16", "D17", "D20", "D21", "D24", "D38", "D52", "D53", "D58", "R11","G01", "G03", "G08", "G13", "G16"]},
    {"bp": "BP6", "evidence": ["D06", "D08", "D13", "D16", "D49", "D50", "D52", "D54", "D58", "D59", "R11","G03", "G10", "G15", "G16"]},
    {"bp": "BP7", "evidence": ["D01", "D02", "D05", "D08", "D12", "D13", "D17", "D20", "D41", "D45", "D46", "D47", "D50", "D51", "D59", "R11","R12", "G07", "G16"]},
    {"bp": "BP8", "evidence": ["D12", "D13", "D17", "D20", "D45", "D46", "R04","R10","R12", "G08", "G11", "G16"]},
    {"bp": "BP9", "evidence": ["D03", "D04", "D05", "D11", "D12", "D13", "D14", "D17", "D20", "D21", "D22", "D41", "D49", "D51", "D52", "D53", "D55", "D56", "D57", "D58", "D59", "R10", "G01", "G02", "G03", "G04", "G06", "G07", "G11", "G13", "G14", "G15", "G16"]},
    {"bp": "BP10", "evidence": ["D02", "D03", "D04", "D05", "D06", "D08", "D11", "D13", "D14", "D16", "D17", "D19", "D20", "D21", "D37", "D49", "D51", "D52", "D53", "D55", "D58", "G04", "G08", "G16"]},
    {"bp": "BP11", "evidence": ["D06", "D11", "D13", "D14", "D17", "D20", "D32", "G01", "G02", "G07", "G15", "G16"]},
    {"bp": "BP12", "evidence": ["D01", "D02", "D03", "D04", "D05", "D08", "D11", "D12", "D13", "D16", "D17", "D19", "D20", "D21", "D22", "D28", "D30", "D37", "D45", "D49", "D51", "D52", "D53", "D55", "D56", "D57", "D58", "D59", "G02", "G04", "G07", "G08", "G10", "G11", "G13", "G14", "G15", "G16"]},
    {"bp": "BP13", "evidence": ["D03", "D04", "D06", "D08", "D11", "D17", "D18", "D20", "D21", "D51", "D53", "D55", "D56", "G13"]},
    {"bp": "BP14", "evidence": ["D01", "D02", "D03", "D04", "D05", "D06", "D12", "D13", "D14", "D17", "D19", "D22", "D23", "D37", "D45", "D49", "D51", "D52", "D53", "D55", "D56", "D57", "R10","G02", "G07", "G08", "G16"]},
    {"bp": "BP15", "evidence": ["D02", "D03", "D04", "D06", "D08", "D11", "D12", "D13", "D17", "D19", "D20", "D21", "D22", "D42", "D49", "D50", "D51", "D52", "D53", "D55", "D58", "D59", "R10","G01", "G02", "G07", "G08", "G10", "G11", "G13", "G14", "G15", "G16"]},
    {"bp": "BP16", "evidence": ["D03", "D04", "D06", "D11", "D16", "D17", "D19", "D20", "D21", "D37", "D45", "D49", "D50", "D51", "D52", "D53", "D55", "D58", "G07", "G08"]},
    {"bp": "BP17", "evidence": ["D01", "D05", "D11", "D13", "D17", "D18", "D20", "D44", "D48", "D49", "D52", "D53", "D56", "D57", "D58", "D59", "G04", "G08", "G16"]},
    {"bp": "BP18", "evidence": ["D03", "D04", "D05", "D11", "D13", "D16", "D17", "D29", "D33", "D44", "D45", "D49", "D52", "D53", "D55", "R05","G08", "G16"]},
    {"bp": "BP19", "evidence": ["D03", "D04", "D08", "D13", "D17", "D19", "D20", "D21", "D49", "D51", "D53", "D55", "D56", "D57", "D58", "R06","R07","G07", "G15", "G16"]},
    {"bp": "BP20", "evidence": ["D05", "D17", "D22", "D45", "R01","R14","G16"]},
    {"bp": "BP21", "evidence": ["D01", "D05", "D06", "D11", "D12", "D13", "D17", "D18", "D19", "D21", "D22", "D38", "D45", "D49", "D51", "D53", "D57", "D58", "D59", "G08", "G12", "G15", "G16"]},
    {"bp": "BP22", "evidence": ["D05", "D06", "D43", "D45", "D54", "D56", "D59", "G16"]},
    {"bp": "BP23", "evidence": ["D02", "D03", "D04", "D11", "D12", "D13", "D14", "D15", "D16", "D17", "D19", "D20", "D21", "D22", "D28", "D44", "D45", "D48", "D49", "D52", "D53", "D55", "D56", "D57", "D59", "R15","G04", "G05", "G08"]},
    {"bp": "BP24", "evidence": ["D03", "D04", "D12", "D13", "D14", "D15", "D16", "D17", "D19", "D20", "D21", "D22", "D44", "D45", "D49", "D53", "D55", "R16"]},
    {"bp": "BP25", "evidence": ["D02", "D07", "D12", "D13", "D14", "D15", "D16", "D17", "D19", "D21", "D22", "D27", "D37", "D45", "D48", "D49", "D52", "D53", "D56", "D57", "R15"]},
    {"bp": "BP26", "evidence": ["D03", "D04", "D11", "D14", "D15", "D17", "D21", "D45", "D53", "D55", "R17"]},
    {"bp": "BP27", "evidence": ["D04", "D11", "D17", "D59", "R10", "G01", "G11", "G14", "G16", "R22"]},
    {"bp": "BP28", "evidence": ["D11", "D58", "R08","R10"]},
    {"bp": "BP29", "evidence": ["D01", "D02", "D04", "D05", "D06", "D12", "D13", "D14", "D15", "D17","D19", "D20", "D21", "D36", "D45", "D51", "D52", "D53", "D56", "D57", "D58", "G01", "G04", "G08", "G11", "G12", "G16"]},
    {"bp": "BP30", "evidence": ["D05", "D13", "D14", "D15", "D17", "D20", "D34", "D51", "D59", "R13","G04", "G16"]},
    {"bp": "BP31", "evidence": ["D04", "D05", "D16", "D17", "D19", "D20", "D49", "R03","G16"]},
    {"bp": "BP32", "evidence": ["D01", "D02", "D05", "D16", "D17", "D19", "D20", "D26", "D45", "D52", "D53", "D55", "D57", "D58", "R02"]},
    {"bp": "BP33", "evidence": ["D06", "D19", "D35", "D45", "D49", "D52", "R09","G16"]},
    {"bp": "BP34", "evidence": ["D04", "D05", "D09", "D11", "D16", "D17", "D20", "D40", "D45", "D49", "D52", "D55", "D56", "D58", "D59", "G04", "G08", "G09", "G15", "G16"]},
    {"bp": "BP35", "evidence": ["D01", "D04", "D06", "D11", "D16", "D17", "D19", "D20", "D21", "D38", "D45", "D49", "D52", "D57", "D58", "D59", "D59", "G16"]}
*/    
    ];

    bpEvidenceTable = document.getElementById('table-bp-evidence');
    var tbody = bpEvidenceTable.getElementsByTagName('tbody')[0];
    var newCell = function(val) { return row.insertCell(row.cells.length).innerHTML = val};
    for (var i = 0; i < bpEvidenceJson.length; i++) {
      obj = bpEvidenceJson[i];
      var row = tbody.insertRow(tbody.rows.length); // new row for the table

      newCell("<a href='#"+obj.bp+"'>"+obj.bp+"</a>");
      var list = "";
      obj.evidence.forEach(function(ev) {
        var d = "<a href='#"+ev+"'>"+ev+"</a>, ";
        list += d;
      })
      list = list.slice(0, -2);
      newCell(list);
      newCell(obj.evidence.length);
    }
}

function createReferencesTable() {
  references = [
{"Link": "https://www.nextbus.com/#!/sf-muni/E/E____I_F00/4532/4503", "email": "amgreiner@lbl.gov", "ProvidedBy": "Annette", "Category": "Page", "OrganizationSite": "https://www.nextbus.com/", "OrganizationName": "NextBus", "ID": "R01"},
{"Link": "http://docs.ckan.org/en/latest/maintaining/data-viewer.html", "email": "amgreiner@lbl.gov", "ProvidedBy": "Annette", "Category": "Page", "OrganizationSite": "http://docs.ckan.org/", "OrganizationName": "CKAN", "ID": "R02"},
{"Link": "https://www.researchgate.net/publication/262254329_Fashion_10000_An_enriched_social_image_dataset_for_fashion_and_clothing", "email": "amgreiner@lbl.gov", "ProvidedBy": "Annette", "Category": "Paper", "OrganizationSite": "null", "OrganizationName": "null", "ID": "R03"},
{"Link": "https://www.w3.org/2016/11/sdsvoc/SDSVoc16_paper_6", "email": "laufer@globo.com", "ProvidedBy": "Laufer", "Category": "Paper", "OrganizationSite": "http://data.ign.fr", "OrganizationName": "IGN - Institut National de Línformation Géographique et Forestiére", "ID": "R04"},
{"Link": "http://portal.nersc.gov/project/20C_Reanalysis/", "email": "amgreiner@lbl.gov", "ProvidedBy": "Annette", "Category": "Project", "OrganizationSite": "http://portal.nersc.gov/project/20C_Reanalysis/", "OrganizationName": "20th Century Reanalysis Project", "ID": "R05"},
{"Link": "http://restlet.com/blog/2015/12/10/understanding-http-content-negotiation/", "email": "amgreiner@lbl.gov", "ProvidedBy": "Annette", "Category": "Blog", "OrganizationSite": "http://restlet.com/blog", "OrganizationName": "RESTLET", "ID": "R06"},
{"Link": "https://www.w3.org/blog/2006/02/content-negotiation/", "email": "amgreiner@lbl.gov", "ProvidedBy": "Annette", "Category": "Blog", "OrganizationSite": "https://www.w3.org/blog/2006/02/content-negotiation/", "OrganizationName": "W3C", "ID": "R07"},
{"Link": "http://blog.dshr.org/2008/01/does-preserving-context-matter.html", "email": "christophe.gueret@bbc.co.uk", "ProvidedBy": "Christophe Guéret", "Category": "Blog", "OrganizationSite": "http://blog.dshr.org/", "OrganizationName": "David Rosenthal Blog", "ID": "R08"},
{"Link": "http://www.uniprot.org/contact", "email": "eric.stephan@pnnl.gov", "ProvidedBy": "Eric Stephan", "Category": "Site", "OrganizationSite": "http://www.uniprot.org", "OrganizationName": "Universal Protein Resource", "ID": "R09"},
{"Link": "https://pcmdi.llnl.gov/search/acme-llnl/", "email": "eric.stephan@pnnl.gov", "ProvidedBy": "Eric Stephan", "Category": "Site", "OrganizationSite": "https://pcmdi.llnl.gov/search/acme-llnl/", "OrganizationName": "Earth System Grid/ Accelerated Climate Modeling for Energy", "ID": "R10"},
{"Link": "http://materialsproject.org", "email": "amgreiner@lbl.gov", "ProvidedBy": "Annette", "Category": "Site", "OrganizationSite": "http://materialsproject.org", "OrganizationName": "collaboration between Lawrence Berkeley Natl Lab; MIT; and other insitutions", "ID": "R11"},
{"Link": "http://www.bcis.org.uk", "email": "amgreiner@lbl.gov", "ProvidedBy": "Annette", "Category": "Site", "OrganizationSite": "http://www.bcis.org.uk", "OrganizationName": "British Cardiovascular Intervention Society", "ID": "R12"},
{"Link": "http://wikipathways.org/index.php", "email": "eric.stephan@pnnl.gov", "ProvidedBy": "Eric Stephan", "Category": "Wiki", "OrganizationSite": " http://wikipathways.org/", "OrganizationName": "WikiPATHWAYS", "ID": "R13"},
{"Link": "https://dev.twitter.com/streaming/public", "email": "amgreiner@lbl.gov", "ProvidedBy": "Annette", "Category": "Page", "OrganizationSite": "https://twitter.com/", "OrganizationName": "Twitter", "ID": "R14"},
{"Link": "https://dev.twitter.com/overview/api", "email": "amgreiner@lbl.gov", "ProvidedBy": "Annette", "Category": "Page", "OrganizationSite": "https://twitter.com/", "OrganizationName": "Twitter", "ID": "R15"},
{"Link": "https://dev.twitter.com/rest/public", "email": "amgreiner@lbl.gov", "ProvidedBy": "Annette", "Category": "Page", "OrganizationSite": "https://twitter.com/", "OrganizationName": "Twitter", "ID": "R16"},
{"Link": "https://dev.twitter.com/overview/api/upcoming-changes-to-tweets", "email": "amgreiner@lbl.gov", "ProvidedBy": "Annette", "Category": "Page", "OrganizationSite": "https://twitter.com/", "OrganizationName": "Twitter", "ID": "R17"},
{"Link": "https://www.nationalarchives.gov.uk/documents/information-management/redirection-technical-guidance-for-departments-v4.2-web-version.pdf", "email": "hvdsomp@gmail.com", "ProvidedBy": "Herbert Van de Sompel", "Category": "Document", "OrganizationSite": "http://nationalarchives.gov.uk/", "OrganizationName": "The National Archives", "ID": "R18"},
{"Link": "http://sunlightfoundation.com/opendataguidelines/#permanent-access", "email": "bfl@cin.ufpe.br", "ProvidedBy": "Bernadette ", "Category": "Page", "OrganizationSite": "http://sunlightfoundation.com/", "OrganizationName": "Sunlight Foundation", "ID": "R19"},
{"Link": "https://dmp.data.jhu.edu/preserve-share-research-data/preserve-archive/", "email": "bfl@cin.ufpe.br", "ProvidedBy": "Bernadette ", "Category": "Page", "OrganizationSite": "https://dmp.data.jhu.edu/", "OrganizationName": "Johns Hopkins University Data Management Services", "ID": "R20"},
{"Link": "http://guides.dataverse.org/en/latest/user/dataset-management.html","email": "hvdsomp@gmail.com","ProvidedBy": "Herbert Van de Sompel","Category": "Page","OrganizationSite": "http://dataverse.org/","OrganizationName": "Dataverse project","ID": "R21"},
{"Link": "http://ceos.org/document_management/Working_Groups/WGISS/Interest_Groups/Data_Stewardship/Best_Practices/CEOS%20Persistent%20Identifier%20Best%20Practices_v1.1.pdf","email": "hvdsomp@gmail.com","ProvidedBy": "Herbert Van de Sompel","Category": "Page","OrganizationSite": "http://ceos.org/ourwork/workinggroups/wgiss/","OrganizationName": "CEOS Data Stewardship Interest Group","ID": "R22"}
];

  referencesTable = document.getElementById('table-references');
  var tbody = referencesTable.getElementsByTagName('tbody')[0];

  var newCell = function(val) { return row.insertCell(row.cells.length).innerHTML = val};
  for (var i = 0; i < references.length; i++) {
    var obj = references[i];
    var row = tbody.insertRow(tbody.rows.length); // new row for the table
    var orgId = row.insertCell(row.cells.length);
    orgId.innerHTML = obj['ID'];
    orgId.id = obj['ID'];
    newCell("<a href="+obj['OrganizationSite']+">"+obj['OrganizationName']+"</a>" );
    newCell("<a href="+obj['Link']+">"+obj['Link']+"</a>");
    newCell(obj['Category']);
    // newCell(obj['ProvidedBy']);
    // newCell(obj['email']);
  }

}

function createVocabulariesTable() {
  guidelines = [
    {"Year": "2018", "CitationKey": "DCAT-AP", "Guide": "DCAT-AP", "Country": "Europe", "Creator": "European Commission", "ID": "V01", "GuideURL": "https://joinup.ec.europa.eu/solution/dcat-application-profile-data-portals-europe"},
    {"Year": "2016", "Guide": "GeoDCAT-AP", "Country": "Europe", "Creator": "European Commission", "ID": "V02", "GuideURL": "https://joinup.ec.europa.eu/release/geodcat-ap-working-drafts/"},
    {"Year": "2016", "Guide": "StatDCAT-AP", "Country": "Europe", "Creator": "European Commission", "ID": "V03", "GuideURL": "https://joinup.ec.europa.eu/solution/statdcat-application-profile-data-portals-europe"},
    {"Year": "2019", "Guide": "Datacite+DCAT-AP", "Country": "Europe", "Creator": "European Commission", "ID": "V04", "GuideURL": "https://joinup.ec.europa.eu/asset/dcat-ap_implementation_guidelines/description"},
    {"Year": "2015", "Guide": "HCLS-Dataset", "Country": "International", "Creator": "W3C Semantic Web in Health Care and Life Sciences Interest Group", "ID": "V04", "GuideURL": "https://www.w3.org/TR/hcls-dataset/"}
/*    
    {"Year": "not available", "Guide": "Open Data Support training material", "Country": "not available", "Creator": "not available", "ID": "G02", "GuideURL": "https://joinup.ec.europa.eu/community/ods/og_page/training"},
    {"Year": "2016", "Guide": "Linee Guida Nazionali per la Valorizzazione del Patrimonio Informativo Pubblico", "Country": "Italy", "Creator": "Agenzia per l'Italia Digitale", "ID": "G03", "GuideURL": "http://www.dati.gov.it/content/consultazione-sulle-linee-guida-nazionali-valorizzazione-patrimonio-informativo-pubblico"},
    {"Year": "2016", "Guide": "Romanian Open Data Guide", "Country": "Romania", "Creator": "Chancellery of PM", "ID": "G04", "GuideURL": "http://ogp.gov.ro/wp-content/uploads/2015/03/GHID-DE-PUBLICARE-A-DATELOR-DESCHISE_martie-2015.pdf"},
    {"Year": "not available", "Guide": "Vidareutnyttjande.se", "Country": "Sweden", "Creator": "not available", "ID": "G05", "GuideURL": "http://www.vidareutnyttjande.se/"},
    {"Year": "not available", "Guide": "Ramverk för öppna data (municipalities and regions)", "Country": "Sweden", "Creator": "not available", "ID": "G06", "GuideURL": "http://skl.se/naringslivarbetedigitalisering/digitalisering/digitaldelaktighetoppenhet/oppnadata/stodvagledning/ramverkoppnadata/ramverketforoppnadata.1184.html"},
    {"Year": "2015", "Guide": "ELI implementation methodology: Good practices and guidelines", "Country": "Europe", "Creator": "ELI Task Force/Publications Office of the European Union", "ID": "G07", "GuideURL": "http://booksho...Key=OA0115858"},
    {"Year": "2016", "Guide": "Standardy publikace a katalogizace otevřených dat veřejné správy ČR", "Country": "Czech Republic", "Creator": "Ministry of the Interior of the Czech Republic", "ID": "G08", "GuideURL": "http://opendata.gov.cz/"},
    {"Year": "2015", "Guide": "Open Data Resource Pack", "Country": "Scotland", "Creator": "Scottish Government", "ID": "G09", "GuideURL": "http://www.gov.scot/Publications/2015/08/4093/0"},
    {"Year": "2014", "Guide": "Government Data Openness and Re-Use", "Country": "Spain", "Creator": "Government of Catalonia", "ID": "G10", "GuideURL": "http://transparencia.gencat.cat/es/menu/colleccio-govern-obert/Obertura-i-reutilitzacio-de-dades-publiques-00009"},
    {"Year": "2012", "Guide": "Open Data Decalogue", "Country": "Spain", "Creator": "Open Data Spain Community Group", "ID": "G11", "GuideURL": "http://red.gnoss.com/comunidad/OpenData/recurso/decalogo-open-data/ccf8c53a-fc6c-4e55-b7d3-68a0f9b67ace"},
    {"Year": "2014", "Guide": "Guía metodológica para planes open data sectoriales (Methodological Guide for Sectorial Open Data Plans)", "Country": "Spain", "Creator": "Spanish Government", "ID": "G12", "GuideURL": "http://datos.gob.es/sites/default/files/informe-opendata-sectorial.pdf"},
    {"Year": "2014", "Guide": "Guía para el desarrollo de la Universidad Abierta (Open University Development Guide)", "Country": "Spain", "Creator": "CRUE-TIC Spain", "ID": "G13", "GuideURL": "http://datos.g...adabierta.pdf"},
    {"Year": "2012", "Guide": "Castilla y León Open Data Guidelines", "Country": "Spain", "Creator": "Government of Castille and León", "ID": "G14", "GuideURL": "http://www.datosabiertos.jcyl.es/web/jcyl/RISP/es/Plantilla100/1284197744824/_/_/_"},
    {"Year": "2014", "Guide": "Open Data Support", "Country": "Europe", "Creator": "European Commission", "ID": "G15", "GuideURL": "https://joinup.ec.europa.eu/community/ods/og_page/training"},
    {"Year": "2016", "Guide": "Guía de aplicación de la Norma Técnica de Interoperabilidad de Reutilización de Recursos de Información", "Country": "Spain", "Creator": "Spanish Government - Ministerio de Hacienda y Administraciones Públicas", "ID": "G16", "GuideURL": "http://datos.gob.es/sites/default/files/20160726_guia_de_aplicacion_de_la_nti_reutilizacion_recursos_de_informacion_l.pdf"}
*/    
    ];

    guidelinesTable = document.getElementById('table-vocabularies');
    var tbody = guidelinesTable.getElementsByTagName('tbody')[0];
    var newCell = function(val) { return row.insertCell(row.cells.length).innerHTML = val};
    for (var i = 0; i < guidelines.length; i++) {
      var obj = guidelines[i];
      var row = tbody.insertRow(tbody.rows.length); // new row for the table
      var orgId = row.insertCell(row.cells.length);
      orgId.innerHTML = obj['ID'];
      orgId.id = obj['ID'];
      if (obj['CitationKey'] != '') {
        newCell("<a href="+obj['GuideURL']+">"+obj['Guide']+"</a>" );
      }
      else {
        newCell("[["+obj['Guide']+"]]" );
      }
      newCell(obj['Creator']);
      newCell(obj['Country']);
      newCell(obj['Year']);
    }

}

function createGuidelinesTable() {
  guidelines = [
    {"Year": "2016", "Guide": "DCAT-AP Implementation Guidelines", "Country": "Europe", "Creator": "European Commission", "ID": "G01", "GuideURL": "https://joinup.ec.europa.eu/asset/dcat-ap_implementation_guidelines/description"},
    {"Year": "2017", "Guide": "Report on DCAT-AP use", "Country": "Europe", "Creator": "European Commission", "ID": "G02", "GuideURL": "https://joinup.ec.europa.eu/document/report-dcat-ap-use"},
    {"Year": "2017", "Guide": "Analysis of the DCAT-AP extensions", "Country": "Europe", "Creator": "European Commission", "ID": "G03", "GuideURL": "https://joinup.ec.europa.eu/document/national-extensions-analysis-dcat-ap"},
/*    
    {"Year": "not available", "Guide": "Open Data Support training material", "Country": "not available", "Creator": "not available", "ID": "G02", "GuideURL": "https://joinup.ec.europa.eu/community/ods/og_page/training"},
    {"Year": "2016", "Guide": "Linee Guida Nazionali per la Valorizzazione del Patrimonio Informativo Pubblico", "Country": "Italy", "Creator": "Agenzia per l'Italia Digitale", "ID": "G03", "GuideURL": "http://www.dati.gov.it/content/consultazione-sulle-linee-guida-nazionali-valorizzazione-patrimonio-informativo-pubblico"},
    {"Year": "2016", "Guide": "Romanian Open Data Guide", "Country": "Romania", "Creator": "Chancellery of PM", "ID": "G04", "GuideURL": "http://ogp.gov.ro/wp-content/uploads/2015/03/GHID-DE-PUBLICARE-A-DATELOR-DESCHISE_martie-2015.pdf"},
    {"Year": "not available", "Guide": "Vidareutnyttjande.se", "Country": "Sweden", "Creator": "not available", "ID": "G05", "GuideURL": "http://www.vidareutnyttjande.se/"},
    {"Year": "not available", "Guide": "Ramverk för öppna data (municipalities and regions)", "Country": "Sweden", "Creator": "not available", "ID": "G06", "GuideURL": "http://skl.se/naringslivarbetedigitalisering/digitalisering/digitaldelaktighetoppenhet/oppnadata/stodvagledning/ramverkoppnadata/ramverketforoppnadata.1184.html"},
    {"Year": "2015", "Guide": "ELI implementation methodology: Good practices and guidelines", "Country": "Europe", "Creator": "ELI Task Force/Publications Office of the European Union", "ID": "G07", "GuideURL": "http://booksho...Key=OA0115858"},
    {"Year": "2016", "Guide": "Standardy publikace a katalogizace otevřených dat veřejné správy ČR", "Country": "Czech Republic", "Creator": "Ministry of the Interior of the Czech Republic", "ID": "G08", "GuideURL": "http://opendata.gov.cz/"},
    {"Year": "2015", "Guide": "Open Data Resource Pack", "Country": "Scotland", "Creator": "Scottish Government", "ID": "G09", "GuideURL": "http://www.gov.scot/Publications/2015/08/4093/0"},
    {"Year": "2014", "Guide": "Government Data Openness and Re-Use", "Country": "Spain", "Creator": "Government of Catalonia", "ID": "G10", "GuideURL": "http://transparencia.gencat.cat/es/menu/colleccio-govern-obert/Obertura-i-reutilitzacio-de-dades-publiques-00009"},
    {"Year": "2012", "Guide": "Open Data Decalogue", "Country": "Spain", "Creator": "Open Data Spain Community Group", "ID": "G11", "GuideURL": "http://red.gnoss.com/comunidad/OpenData/recurso/decalogo-open-data/ccf8c53a-fc6c-4e55-b7d3-68a0f9b67ace"},
    {"Year": "2014", "Guide": "Guía metodológica para planes open data sectoriales (Methodological Guide for Sectorial Open Data Plans)", "Country": "Spain", "Creator": "Spanish Government", "ID": "G12", "GuideURL": "http://datos.gob.es/sites/default/files/informe-opendata-sectorial.pdf"},
    {"Year": "2014", "Guide": "Guía para el desarrollo de la Universidad Abierta (Open University Development Guide)", "Country": "Spain", "Creator": "CRUE-TIC Spain", "ID": "G13", "GuideURL": "http://datos.g...adabierta.pdf"},
    {"Year": "2012", "Guide": "Castilla y León Open Data Guidelines", "Country": "Spain", "Creator": "Government of Castille and León", "ID": "G14", "GuideURL": "http://www.datosabiertos.jcyl.es/web/jcyl/RISP/es/Plantilla100/1284197744824/_/_/_"},
    {"Year": "2014", "Guide": "Open Data Support", "Country": "Europe", "Creator": "European Commission", "ID": "G15", "GuideURL": "https://joinup.ec.europa.eu/community/ods/og_page/training"},
    {"Year": "2016", "Guide": "Guía de aplicación de la Norma Técnica de Interoperabilidad de Reutilización de Recursos de Información", "Country": "Spain", "Creator": "Spanish Government - Ministerio de Hacienda y Administraciones Públicas", "ID": "G16", "GuideURL": "http://datos.gob.es/sites/default/files/20160726_guia_de_aplicacion_de_la_nti_reutilizacion_recursos_de_informacion_l.pdf"}
*/    
    ];

    guidelinesTable = document.getElementById('table-guidelines');
    var tbody = guidelinesTable.getElementsByTagName('tbody')[0];
    var newCell = function(val) { return row.insertCell(row.cells.length).innerHTML = val};
    for (var i = 0; i < guidelines.length; i++) {
      var obj = guidelines[i];
      var row = tbody.insertRow(tbody.rows.length); // new row for the table
      var orgId = row.insertCell(row.cells.length);
      orgId.innerHTML = obj['ID'];
      orgId.id = obj['ID'];
      newCell("<a href="+obj['GuideURL']+">"+obj['Guide']+"</a>" );
      newCell(obj['Creator']);
      newCell(obj['Country']);
      newCell(obj['Year']);
    }

}

function createBpDataCatalogueTable(){
  bpDataCatalogueJson = [
    {"bp": "BP1", "catalogue": ["CKAN","SOCRATA", "DKAN", "JUNAR", "ARCGIS OPEN DATA", "OPENDATASOFT"]},
    {"bp": "BP2", "catalogue": ["CKAN","SOCRATA", "DKAN", "JUNAR", "ARCGIS OPEN DATA", "OPENDATASOFT"]},
    {"bp": "BP3", "catalogue": ["CKAN (partial)", "SOCRATA", "JUNAR (partial)", "ARCGIS OPEN DATA"]},
    {"bp": "BP4", "catalogue": ["CKAN", "SOCRATA", "DKAN", "ARCGIS OPEN DATA (partial)", "OPENDATASOFT (partial)"]},
    {"bp": "BP5", "catalogue": ["CKAN", "SOCRATA", "DKAN", "ARCGIS OPEN DATA (partial)", "OPENDATASOFT (partial)"]},
    {"bp": "BP6", "catalogue": ["SOCRATA"]},
    {"bp": "BP7", "catalogue": ["CKAN", "DKAN"]},
    {"bp": "BP8", "catalogue": ["SOCRATA (partial)", "DKAN"]},
    {"bp": "BP9", "catalogue": ["CKAN", "SOCRATA", "DKAN", "JUNAR", "ARCGIS OPEN DATA", "OPENDATASOFT"]},
    {"bp": "BP10", "catalogue": []},
    {"bp": "BP11", "catalogue": ["SOCRATA"]},
    {"bp": "BP12", "catalogue": ["CKAN", "SOCRATA", "DKAN", "JUNAR", "ARCGIS OPEN DATA", "OPENDATASOFT"]},
    {"bp": "BP13", "catalogue": ["OPENDATASOFT (partial)"]},
    {"bp": "BP14", "catalogue": ["SOCRATA","JUNAR", "ARCGIS OPEN DATA", "OPENDATASOFT"]},
    {"bp": "BP15", "catalogue": ["CKAN", "SOCRATA", "DKAN", "JUNAR", "OPENDATASOFT"]},
    {"bp": "BP16", "catalogue": []},
    {"bp": "BP17", "catalogue": ["CKAN", "SOCRATA", "DKAN", "JUNAR", "ARCGIS OPEN DATA", "OPENDATASOFT"]},
    {"bp": "BP18", "catalogue": ["CKAN", "SOCRATA", "DKAN", "JUNAR", "ARCGIS OPEN DATA"]},
    {"bp": "BP19", "catalogue": ["SOCRATA", "JUNAR", "ARCGIS OPEN DATA", "OPENDATASOFT"]},
    {"bp": "BP20", "catalogue": ["ARCGIS OPEN DATA"]},
    {"bp": "BP21", "catalogue": ["SOCRATA"]},
    {"bp": "BP22", "catalogue": []},
    {"bp": "BP23", "catalogue": ["CKAN", "SOCRATA", "DKAN", "JUNAR", "ARCGIS OPEN DATA", "OPENDATASOFT"]},
    {"bp": "BP24", "catalogue": ["CKAN", "SOCRATA", "DKAN", "JUNAR", "ARCGIS OPEN DATA", "OPENDATASOFT"]},
    {"bp": "BP25", "catalogue": ["CKAN", "SOCRATA", "DKAN", "JUNAR", "ARCGIS OPEN DATA", "OPENDATASOFT"]},
    {"bp": "BP26", "catalogue": ["CKAN", "SOCRATA", "DKAN", "JUNAR", "ARCGIS OPEN DATA", "OPENDATASOFT"]},
    {"bp": "BP27", "catalogue": []},
    {"bp": "BP28", "catalogue": []},
    {"bp": "BP29", "catalogue": ["CKAN", "SOCRATA", "DKAN"]},
    {"bp": "BP30", "catalogue": ["CKAN", "SOCRATA", "OPENDATASOFT"]},
    {"bp": "BP31", "catalogue": []},
    {"bp": "BP32", "catalogue": ["CKAN", "SOCRATA", "DKAN", "JUNAR", "ARCGIS OPEN DATA", "OPENDATASOFT"]},
    {"bp": "BP33", "catalogue": ["OPENDATASOFT"]},
    {"bp": "BP34", "catalogue": []},
    {"bp": "BP35", "catalogue": []}];

    bpDataCatalogueTable = document.getElementById('table-bp-datacatalogue');
    var tbody = bpDataCatalogueTable.getElementsByTagName('tbody')[0];
    var newCell = function(val) { return row.insertCell(row.cells.length).innerHTML = val};
    for (var i = 0; i < bpDataCatalogueJson.length; i++) {
      obj = bpDataCatalogueJson[i];
      var row = tbody.insertRow(tbody.rows.length); // new row for the table

      newCell("<a href='#"+obj.bp+"'>"+obj.bp+"</a>");
      var list = "";
      obj.catalogue.forEach(function(ev) {
        var d = ev + ", ";
        list += d;
      })
      list = list.slice(0, -2);
      newCell(list);
      newCell(obj.catalogue.length);
    }
}


