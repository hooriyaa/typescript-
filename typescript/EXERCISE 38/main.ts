function describe__city(city:string, country:string='default country'){
    console.log(`${city} is in ${country}.`);
}
describe__city('karachi','pakistan');
describe__city('Tianjin','china');
describe__city('karachi');