"use client"
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import styles from './HomeSearchLinks.module.scss';
import useWindowSize from '@/hooks/useWindowSize';
// import ArrowButton from '@/components/fluid/ArrowButton';
// import useFlowGetStartedStore from "@/store/store.js"
// import useGoogleTagManager from "@/hooks/useGoogleTagManager";


const HomeSearchLinks = ({main_component_style, centered_style}) => {
    const router = useRouter();
    // const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();

    // const selected_questions_tab_index = useFlowGetStartedStore(state => state.selected_questions_tab_index);
    // const setSelectedQuestionsTabIndex = useFlowGetStartedStore(state => state.setSelectedQuestionsTabIndex);


    const windowSize = useWindowSize();
    const [mainComponentStyle, setMainComponentStyle] = styles['main-component-white'];
    const [centeredStyle, setCenteredStyle] = 'centered-content';
    const [cityLinks, setCityLinks] = useState({});
    const [moreClicked, setMoreClicked] = useState({
        "RI": false,
        "MA": false,
        "CT": false,
    });
    const [mobileClicked, setMobileClicked] = useState({
        "RI": false,
        "MA": false,
        "CT": false,
    });

    const [temp_style, setTempStyle] = useState("");
    // const [title, setTitle] = useState("You’ve got questions. <br />And we have the answers.");
    // const [copy, setCopy] = useState("When you change the industry, there’s bound to be a few questions.");
    // const [show_link, setShowLink] = useState(false);
    // const [questions, setQuestions] = useState([
    //     {
    //         title: "This sounds too good to be true.  What’s the catch here?",
    //         copy: "You know we get that a lot.  But the truth is it’s not too good to be true, it’s just the way things should be.  By automating parts of the home buying process, our agents are able to work more efficiently for less commission.   And with our long lasting relationships with local attorney’s, title companies, escrow companies, and mortgage lenders, you can save thousands more when working with our preferred partners.",
    //         visible: false,
    //     },
    //     {
    //         title: "How is HomeEasy Homes different than other real estate technology companies?",
    //         copy: "HomeEasy Homes breaks the mold of typical real estate tech companies, as it was created by industry experts who saw the need to eliminate outdated strategies and processes.  We wanted to make selling a home easier and less stressful, providing you with simplicity, choices, and peace of mind. We've taken out the headaches and hassles, giving you control over the process of selling and buying your home, because we understand that it's not just a house—it's your home. You call the shots, and we'll be there to help you find the ideal solution for all your real estate needs.",
    //         visible: false,
    //     },
    //     {
    //         title: "How do I get started with HomeEasy Homes?",
    //         copy: "When you reach out to us, we'll make sure you talk to a team member whose main job is to find you the perfect local agent. They'll be someone who totally gets your needs and knows the local market inside out.",
    //         visible: false,
    //     },
    //     {
    //         title: "Can I sell or buy with HomeEasy homes if I am already working with an agent?",
    //         copy: "As a buyer yes, but as an industry standard, we will ask you to sign an exclusive agreement if you decide to list with us.",
    //         visible: false,
    //     },
    // ]);

    const dupe_city_links = {
        "Bristol_RI": "https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=all&ccz=city&city[]=5710&srt=newest&lp=100000",
        "Bristol_CT": "https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=all&ccz=city&city[]=5701&srt=newest&lp=100000",
        "Middletown_RI": "https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=all&ccz=city&city[]=30048&srt=newest&lp=100000",
        "Middletown_CT": "https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=all&ccz=city&city[]=30036&srt=newest&lp=100000",
        "Milford_CT": "https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=all&ccz=city&city[]=30187&srt=newest&lp=100000",
        "Manchester_CT": "https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=all&ccz=city&city[]=28105&srt=newest&lp=100000",
        "Mansfield_CT": "https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=all&ccz=city&city[]=28271&srt=newest&lp=100000",
        "Salem_MA": "https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=all&ccz=city&city[]=41059&srt=newest&lp=100000",
        "Plymouth_MA": "https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=all&ccz=city&city[]=37122&srt=newest&lp=100000",
        "Marlborough_MA": "https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=all&ccz=city&city[]=28588&srt=newest&lp=100000",
        "Warren_RI": "https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=all&ccz=city&city[]=49980&srt=newest&lp=100000",
        "Scituate_RI": "https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=all&ccz=city&city[]=41818&srt=newest&lp=100000",
        "New Shoreham_RI": "https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=all&ccz=city&city[]=4438&srt=newest&lp=100000",
        
    }

    const city_codes = [["130", "Abington"],
    ["185", "Acton"],
    ["183", "Acton"],
    ["186", "Acton"],
    ["188", "Acushnet"],
    ["212", "Adams"],
    ["240", "Adamsville"],
    ["335", "Agawam"],
    ["462", "Albany"],
    ["598", "Alford"],
    ["695", "Allenstown"],
    ["931", "Alton"],
    ["1066", "Amenia"],
    ["1084", "Amesbury"],
    ["1088", "Amherst"],
    ["1091", "Amherst"],
    ["1174", "Ancram"],
    ["1208", "Andover"],
    ["1204", "Andover"],
    ["1213", "Andover"],
    ["1212", "Andover"],
    ["1303", "Ansonia"],
    ["1348", "Antrim"],
    ["1413", "Aquinnah"],
    ["1583", "Arleta"],
    ["1596", "Arlington"],
    ["1767", "Ashburnham"],
    ["1769", "Ashby"],
    ["1781", "Ashfield"],
    ["1784", "Ashford"],
    ["1795", "Ashland"],
    ["1796", "Ashland"],
    ["1913", "Athol"],
    ["1927", "Atkinson"],
    ["1979", "Attleboro"],
    ["2015", "Auburn"],
    ["2021", "Auburn"],
    ["2104", "Austerlitz"],
    ["2181", "Avon"],
    ["2185", "Avon"],
    ["2230", "Ayer"],
    ["2579", "Barkhamsted"],
    ["2642", "Barnstable"],
    ["2643", "Barnstead"],
    ["2661", "Barre"],
    ["2679", "Barrington"],
    ["2677", "Barrington"],
    ["2714", "Bartlett"],
    ["3055", "Beacon Falls"],
    ["3071", "Bear"],
    ["3108", "Bearsville"],
    ["3201", "Becket"],
    ["3218", "Bedford"],
    ["3219", "Bedford"],
    ["3216", "Bedford"],
    ["3307", "Belchertown"],
    ["3461", "Bellingham"],
    ["3504", "Belmont"],
    ["3510", "Belmont"],
    ["3630", "Bennington"],
    ["3732", "Berkley"],
    ["3747", "Berlin"],
    ["3743", "Berlin"],
    ["3776", "Bernardston"],
    ["3843", "Bethany"],
    ["3859", "Bethel"],
    ["3889", "Bethlehem"],
    ["3937", "Beverly"],
    ["3945", "Beverly Hills"],
    ["4106", "Billerica"],
    ["4304", "Blackstone"],
    ["4396", "Blandford"],
    ["4438", "Block Island"],
    ["4458", "Bloomfield"],
    ["4869", "Bolton"],
    ["4870", "Bolton"],
    ["4931", "Bonita Springs"],
    ["5046", "Boston"],
    ["5050", "Boston"],
    ["5067", "Bothell"],
    ["5106", "Bourne"],
    ["5122", "Bow"],
    ["5190", "Boxborough"],
    ["5191", "Boxford"],
    ["5227", "Boylston"],
    ["5235", "Boynton Beach"],
    ["5243", "Bozrah"],
    ["5328", "Braintree"],
    ["5387", "Branford"],
    ["5491", "Brentwood"],
    ["5517", "Brewster"],
    ["5514", "Brewster"],
    ["5556", "Bridgeport"],
    ["5584", "Bridgewater"],
    ["5582", "Bridgewater"],
    ["5644", "Brimfield"],
    ["5710", "Bristol"],
    ["5701", "Bristol"],
    ["5708", "Bristol"],
    ["5771", "Brockton"],
    ["5816", "Bronxville"],
    ["5833", "Brookfield"],
    ["5830", "Brookfield"],
    ["5857", "Brookline"],
    ["5858", "Brookline"],
    ["5864", "Brooklyn"],
    ["6173", "Buckland"],
    ["6393", "Burlington"],
    ["6399", "Burlington"],
    ["6489", "Burrillville"],
    ["6873", "Cambridge"],
    ["6872", "Cambridge"],
    ["7022", "Campton"],
    ["7037", "Canaan"],
    ["7038", "Canaan"],
    ["7032", "Canaan"],
    ["7063", "Candia"],
    ["7121", "Canterbury"],
    ["7120", "Canterbury"],
    ["7129", "Canton"],
    ["7123", "Canton"],
    ["7176", "Cape Canaveral"],
    ["7179", "Cape Coral"],
    ["7290", "Caribou"],
    ["7307", "Carlisle"],
    ["7352", "Carmel"],
    ["7519", "Carver"],
    ["7539", "Casanova"],
    ["8026", "Central Falls"],
    ["8195", "Chaplin"],
    ["8224", "Charlemont"],
    ["8256", "Charlestown"],
    ["8276", "Charlton"],
    ["8311", "Chatham"],
    ["8316", "Chatham"],
    ["8367", "Chelmsford"],
    ["8370", "Chelsea"],
    ["8471", "Cheshire"],
    ["8470", "Cheshire"],
    ["8486", "Chester"],
    ["8480", "Chester"],
    ["8491", "Chester"],
    ["8514", "Chesterfield"],
    ["8574", "Chichester"],
    ["8591", "Chicopee"],
    ["8625", "Chilmark"],
    ["8884", "Claremont"],
    ["8952", "Clarksburg"],
    ["9268", "Clinton"],
    ["9274", "Clinton"],
    ["9532", "Cohasset"],
    ["9562", "Colchester"],
    ["9597", "Colebrook"],
    ["9596", "Colebrook"],
    ["9788", "Colrain"],
    ["9807", "Columbia"],
    ["9985", "Concord"],
    ["9990", "Concord"],
    ["10112", "Conway"],
    ["10117", "Conway"],
    ["10198", "Copake"],
    ["10352", "Cornwall"],
    ["10367", "Corona"],
    ["10579", "Coventry"],
    ["10577", "Coventry"],
    ["10726", "Cranston"],
    ["10904", "Cromwell"],
    ["11071", "Crystal River"],
    ["11142", "Cumberland"],
    ["11163", "Cummington"],
    ["11397", "Dalton"],
    ["11438", "Danbury"],
    ["11442", "Danbury"],
    ["11466", "Danielson"],
    ["11480", "Danvers"],
    ["11494", "Danville"],
    ["11522", "Darien"],
    ["11554", "Dartmouth"],
    ["11673", "Daytona Beach"],
    ["11677", "Dayville"],
    ["11777", "Dedham"],
    ["11783", "Deep River"],
    ["11837", "Deerfield"],
    ["11832", "Deerfield"],
    ["11845", "Deerfield Beach"],
    ["11984", "Delray Beach"],
    ["12004", "Deltona"],
    ["12049", "Dennis"],
    ["12110", "Derby"],
    ["12130", "Derry"],
    ["12180", "Devens"],
    ["12309", "Dighton"],
    ["12622", "Douglas"],
    ["53191", "Dover"],
    ["12654", "Dover"],
    ["12660", "Dover"],
    ["12712", "Dracut"],
    ["12850", "Dublin"],
    ["12882", "Dudley"],
    ["12940", "Dunbarton"],
    ["13040", "Dunstable"],
    ["13076", "Durham"],
    ["13082", "Durham"],
    ["13113", "Duxbury"],
    ["13249", "East Andover"],
    ["13284", "East Bridgewater"],
    ["13286", "East Brookfield"],
    ["13368", "East Fishkill"],
    ["13389", "East Granby"],
    ["13397", "East Greenwich"],
    ["13401", "East Haddam"],
    ["13405", "East Hampton"],
    ["13412", "East Hartford"],
    ["13413", "East Hartland"],
    ["13415", "East Haven"],
    ["13446", "East Kingston"],
    ["13471", "East Longmeadow"],
    ["13473", "East Lyme"],
    ["13564", "East Providence"],
    ["13637", "East Wareham"],
    ["13653", "East Windsor"],
    ["13671", "Eastchester"],
    ["13675", "Eastford"],
    ["13679", "Eastham"],
    ["13680", "Easthampton"],
    ["13697", "Easton"],
    ["13694", "Easton"],
    ["13741", "Eaton"],
    ["13859", "Edgartown"],
    ["13995", "Effingham"],
    ["14022", "Egremont"],
    ["14362", "Ellington"],
    ["14484", "Elmsford"],
    ["14694", "Enfield"],
    ["14690", "Enfield"],
    ["14804", "Epping"],
    ["14808", "Epsom"],
    ["14857", "Errol"],
    ["14861", "Erving"],
    ["14910", "Essex"],
    ["14907", "Essex"],
    ["15139", "Everett"],
    ["15206", "Exeter"],
    ["15203", "Exeter"],
    ["15414", "Fairfield"],
    ["15448", "Fairhaven"],
    ["15572", "Fall River"],
    ["15608", "Falmouth"],
    ["15686", "Farmington"],
    ["15698", "Farmington"],
    ["16037", "Fishers Island"],
    ["16047", "Fishkill"],
    ["16059", "Fitchburg"],
    ["16072", "Fitzwilliam"],
    ["16234", "Florida"],
    ["16567", "Fort Lauderdale"],
    ["16711", "Foster"],
    ["16806", "Foxboro"],
    ["16808", "Foxborough"],
    ["16831", "Framingham"],
    ["16882", "Franklin"],
    ["16890", "Franklin"],
    ["16873", "Franklin"],
    ["17001", "Freedom"],
    ["17042", "Freetown"],
    ["17056", "Fremont"],
    ["17336", "Gales Ferry"],
    ["17358", "Gallatin"],
    ["17495", "Gardner"],
    ["17751", "Georgetown"],
    ["17901", "Gilford"],
    ["17907", "Gill"],
    ["17937", "Gilmanton"],
    ["17950", "Gilsum"],
    ["18023", "Glastonbury"],
    ["18186", "Glenn Dale"],
    ["18256", "Glocester"],
    ["18262", "Gloucester"],
    ["18305", "Goffstown"],
    ["18523", "Goshen"],
    ["18526", "Goshen"],
    ["18528", "Goshen"],
    ["18538", "Gosnold"],
    ["18604", "Grafton"],
    ["18607", "Grafton"],
    ["18640", "Granby"],
    ["18641", "Granby"],
    ["18803", "Grantham"],
    ["18824", "Granville"],
    ["18945", "Great Barrington"],
    ["19064", "Greenburgh"],
    ["19098", "Greenfield"],
    ["19101", "Greenfield"],
    ["19119", "Greenland"],
    ["19131", "Greenport"],
    ["19179", "Greenville"],
    ["19203", "Greenwich"],
    ["19327", "Griswold"],
    ["19352", "Groton"],
    ["19351", "Groton"],
    ["19354", "Groton"],
    ["19379", "Groveland"],
    ["19454", "Guilford"],
    ["19617", "Haddam"],
    ["19629", "Hadley"],
    ["19719", "Halifax"],
    ["19792", "Hamden"],
    ["19811", "Hamilton"],
    ["19874", "Hampden"],
    ["19886", "Hampstead"],
    ["19888", "Hampton"],
    ["19894", "Hampton"],
    ["19898", "Hampton"],
    ["19907", "Hampton Falls"],
    ["19927", "Hancock"],
    ["19922", "Hancock"],
    ["19981", "Hanover"],
    ["20008", "Hanson"],
    ["20078", "Hardwick"],
    ["20215", "Harrison"],
    ["20269", "Hartford"],
    ["20339", "Harvard"],
    ["20362", "Harwich"],
    ["20365", "Harwinton"],
    ["20421", "Hatfield"],
    ["20478", "Haverhill"],
    ["20477", "Haverhill"],
    ["20509", "Hawley"],
    ["20661", "Heath"],
    ["20686", "Hebron"],
    ["20939", "Hernando"],
    ["20946", "Herndon"],
    ["21297", "Hillsborough"],
    ["21307", "Hillsdale"],
    ["21367", "Hingham"],
    ["21379", "Hinsdale"],
    ["21377", "Hinsdale"],
    ["21493", "Holbrook"],
    ["21508", "Holden"],
    ["21537", "Holland"],
    ["21567", "Hollis"],
    ["21579", "Holliston"],
    ["21672", "Holyoke"],
    ["21769", "Hooksett"],
    ["21821", "Hopedale"],
    ["21853", "Hopkinton"],
    ["21851", "Hopkinton"],
    ["21850", "Hopkinton"],
    ["22055", "Hubbardston"],
    ["22088", "Hudson"],
    ["22092", "Hudson"],
    ["22093", "Hudson"],
    ["22148", "Hull"],
    ["22233", "Huntington"],
    ["22243", "Huntington Beach"],
    ["22353", "Hyde Park"],
    ["22421", "Idyllwild"],
    ["22703", "Ipswich"],
    ["22959", "Jacksonboro"],
    ["22998", "Jaffrey"],
    ["23041", "Jamestown"],
    ["23434", "Johnston"],
    ["23818", "Keene"],
    ["24011", "Kensington"],
    ["24015", "Kent"],
    ["24026", "Kent Lakes"],
    ["24205", "Killingly"],
    ["24208", "Killingworth"],
    ["24257", "Kinderhook"],
    ["24347", "Kingston"],
    ["24339", "Kingston"],
    ["24334", "Kingston"],
    ["24473", "Kittery"],
    ["24761", "La Grange"],
    ["24887", "Laconia"],
    ["24951", "Lagrangeville"],
    ["25183", "Lake Peekskill"],
    ["25342", "Lakeville"],
    ["25449", "Lancaster"],
    ["54544", "Lanesborough"],
    ["25543", "Lanham"],
    ["25713", "Laurel"],
    ["25789", "Lawrence"],
    ["25796", "Lawrence"],
    ["25907", "Lebanon"],
    ["25954", "Ledyard"],
    ["25961", "Lee"],
    ["25959", "Lee"],
    ["26041", "Leicester"],
    ["26100", "Lempster"],
    ["26132", "Lenox"],
    ["26152", "Leominster"],
    ["26245", "Leverett"],
    ["26271", "Lewisboro"],
    ["26284", "Lewiston"],
    ["26315", "Lexington"],
    ["26335", "Leyden"],
    ["26503", "Lincoln"],
    ["26506", "Lincoln"],
    ["26496", "Lincoln"],
    ["26659", "Lisbon"],
    ["26651", "Lisbon"],
    ["26676", "Litchfield"],
    ["26682", "Litchfield"],
    ["26716", "Little Compton"],
    ["26802", "Littleton"],
    ["27049", "Londonderry"],
    ["27142", "Longmeadow"],
    ["27253", "Los Angeles"],
    ["27392", "Lowell"],
    ["27477", "Lubec"],
    ["27527", "Ludlow"],
    ["27582", "Lunenburg"],
    ["27664", "Lyme"],
    ["27683", "Lyndeborough"],
    ["27706", "Lynn"],
    ["27720", "Lynnfield"],
    ["27885", "Madison"],
    ["27872", "Madison"],
    ["28022", "Malden"],
    ["28072", "Mamaroneck"],
    ["28105", "Manchester"],
    ["28111", "Manchester"],
    ["28117", "Manchester"],
    ["28271", "Mansfield"],
    ["28276", "Mansfield"],
    ["28425", "Marblehead"],
    ["28530", "Marion"],
    ["28587", "Marlborough"],
    ["28588", "Marlborough"],
    ["28598", "Marlow"],
    ["28673", "Marshfield"],
    ["28669", "Marshfield"],
    ["28804", "Mashpee"],
    ["28809", "Mason"],
    ["28898", "Mattapoisett"],
    ["29030", "Maynard"],
    ["29519", "Medfield"],
    ["29521", "Medford"],
    ["29564", "Medway"],
    ["29626", "Melrose"],
    ["29679", "Mendon"],
    ["29749", "Meredith"],
    ["29755", "Meriden"],
    ["29813", "Merrimac"],
    ["29815", "Merrimack"],
    ["29882", "Methuen"],
    ["29987", "Middleboro"],
    ["54606", "Middleborough"],
    ["30002", "Middlebury"],
    ["30008", "Middlefield"],
    ["30009", "Middlefield"],
    ["30030", "Middleton"],
    ["30028", "Middleton"],
    ["30048", "Middletown"],
    ["30036", "Middletown"],
    ["30146", "Milan"],
    ["30194", "Milford"],
    ["30199", "Milford"],
    ["30187", "Milford"],
    ["30255", "Millbrook"],
    ["30257", "Millbury"],
    ["30308", "Millerton"],
    ["30335", "Millis"],
    ["30371", "Millville"],
    ["30417", "Milton"],
    ["30413", "Milton"],
    ["30813", "Monroe"],
    ["30818", "Monroe"],
    ["30859", "Monson"],
    ["30865", "Mont Vernon"],
    ["30867", "Montague"],
    ["30913", "Monterey"],
    ["30942", "Montgomery"],
    ["31031", "Montville"],
    ["31228", "Morris"],
    ["31372", "Moultonborough"],
    ["31497", "Mount Kisco"],
    ["53884", "Mount Pleasant"],
    ["31617", "Mount Vernon"],
    ["31630", "Mount Washington"],
    ["31915", "Mystic"],
    ["31937", "Nahant"],
    ["31959", "Nantucket"],
    ["31978", "Naples"],
    ["32003", "Narragansett"],
    ["32023", "Nashua"],
    ["32058", "Natick"],
    ["32081", "Naugatuck"],
    ["32171", "Needham"],
    ["32341", "New Bedford"],
    ["32361", "New Boston"],
    ["32365", "New Braintree"],
    ["32373", "New Britain"],
    ["32385", "New Canaan"],
    ["32399", "New Castle"],
    ["53883", "New Castle"],
    ["32427", "New Durham"],
    ["32440", "New Fairfield"],
    ["32464", "New Hampton"],
    ["32477", "New Hartford"],
    ["32482", "New Haven"],
    ["32526", "New Ipswich"],
    ["32556", "New London"],
    ["54541", "New Marlboro"],
    ["32583", "New Marlborough"],
    ["32596", "New Milford"],
    ["32654", "New Rochelle"],
    ["32666", "New Salem"],
    ["32683", "New Smyrna Beach"],
    ["32730", "New Windsor"],
    ["32734", "New York"],
    ["54866", "New York City"],
    ["32790", "Newbury"],
    ["32791", "Newbury"],
    ["32797", "Newburyport"],
    ["32828", "Newfields"],
    ["32839", "Newington"],
    ["32857", "Newmarket"],
    ["32864", "Newport"],
    ["32876", "Newport"],
    ["32870", "Newport"],
    ["32902", "Newton"],
    ["32905", "Newton"],
    ["32929", "Newtown"],
    ["33134", "Norfolk"],
    ["33133", "Norfolk"],
    ["33192", "North Adams"],
    ["33199", "North Andover"],
    ["33205", "North Attleboro"],
    ["33245", "North Branford"],
    ["33250", "North Brookfield"],
    ["33258", "North Canaan"],
    ["33265", "North Castle"],
    ["33349", "North Hampton"],
    ["33356", "North Haven"],
    ["33392", "North Kingstown"],
    ["33494", "North Providence"],
    ["33498", "North Reading"],
    ["33531", "North Smithfield"],
    ["33541", "North Stonington"],
    ["33603", "Northampton"],
    ["33608", "Northborough"],
    ["33609", "Northbridge"],
    ["33632", "Northfield"],
    ["33635", "Northfield"],
    ["33692", "Northwood"],
    ["33698", "Norton"],
    ["33716", "Norwalk"],
    ["33728", "Norwell"],
    ["33729", "Norwich"],
    ["33742", "Norwood"],
    ["33765", "Nottingham"],
    ["33828", "Nyack"],
    ["33851", "Oak Bluffs"],
    ["33952", "Oakham"],
    ["34324", "Old Lyme"],
    ["34337", "Old Orchard Beach"],
    ["34344", "Old Saybrook"],
    ["34597", "Orange"],
    ["34595", "Orange"],
    ["34606", "Orange City"],
    ["34616", "Orangeburg"],
    ["34725", "Orleans"],
    ["34735", "Ormond Beach"],
    ["34853", "Ossining"],
    ["34855", "Ossipee"],
    ["47", "Other"],
    ["12", "Other"],
    ["23", "Other"],
    ["1", "Other"],
    ["34", "Other"],
    ["57", "Other"],
    ["53", "Other"],
    ["45", "Other"],
    ["29", "Other"],
    ["25", "Other"],
    ["18", "Other"],
    ["10", "Other"],
    ["35", "Other"],
    ["37", "Other"],
    ["26", "Other"],
    ["6", "Other"],
    ["34883", "Otis"],
    ["35033", "Oxford"],
    ["35039", "Oxford"],
    ["35235", "Palmer"],
    ["35767", "Patterson"],
    ["35787", "Patuxent River"],
    ["35817", "Pawcatuck"],
    ["35822", "Pawling"],
    ["35829", "Pawtucket"],
    ["35836", "Paxton"],
    ["35866", "Peabody"],
    ["35957", "Peekskill"],
    ["35984", "Pelham"],
    ["35982", "Pelham"],
    ["36018", "Pembroke"],
    ["36021", "Pembroke"],
    ["36114", "Penobscot"],
    ["36153", "Pepperell"],
    ["36264", "Peru"],
    ["36280", "Peterborough"],
    ["36304", "Petersham"],
    ["36378", "Philipstown"],
    ["36391", "Phillipston"],
    ["36634", "Pine Plains"],
    ["36835", "Pittsburg"],
    ["36842", "Pittsfield"],
    ["36840", "Pittsfield"],
    ["36882", "Plainfield"],
    ["36887", "Plainfield"],
    ["36913", "Plainville"],
    ["36918", "Plainville"],
    ["36921", "Plaistow"],
    ["37044", "Pleasant Valley"],
    ["37069", "Pleasantville"],
    ["37122", "Plymouth"],
    ["37117", "Plymouth"],
    ["37129", "Plymouth"],
    ["37142", "Plympton"],
    ["37268", "Pomfret"],
    ["37281", "Pompano Beach"],
    ["37395", "Port Charlotte"],
    ["37396", "Port Chester"],
    ["37525", "Portland"],
    ["37550", "Portsmouth"],
    ["37548", "Portsmouth"],
    ["37626", "Poughkeepsie"],
    ["37627", "Poughquag"],
    ["37633", "Pound Ridge"],
    ["37805", "Preston"],
    ["37885", "Princeton"],
    ["37946", "Prospect"],
    ["37986", "Providence"],
    ["37991", "Provincetown"],
    ["38090", "Putnam"],
    ["38099", "Putnam Valley"],
    ["38225", "Quincy"],
    ["38443", "Randolph"],
    ["38591", "Raymond"],
    ["38603", "Raynham"],
    ["54113", "Reading"],
    ["38623", "Reading"],
    ["38750", "Redding"],
    ["38883", "Rehoboth"],
    ["39082", "Revere"],
    ["39264", "Richmond"],
    ["39256", "Richmond"],
    ["39331", "Ridgefield"],
    ["39417", "Rindge"],
    ["39590", "Riverton"],
    ["39741", "Rochester"],
    ["39738", "Rochester"],
    ["39864", "Rockland"],
    ["39883", "Rockport"],
    ["39938", "Rocky Hill"],
    ["40049", "Rollinsford"],
    ["40329", "Round Hill"],
    ["40373", "Rowe"],
    ["40390", "Rowley"],
    ["40396", "Roxbury"],
    ["40438", "Royalston"],
    ["53242", "RUSSELL"],
    ["40584", "Russell"],
    ["40642", "Rutland"],
    ["40670", "Rye"],
    ["40671", "Rye"],
    ["40674", "Rye Brook"],
    ["41059", "Salem"],
    ["41066", "Salem"],
    ["41053", "Salem"],
    ["41113", "Salisbury"],
    ["41106", "Salisbury"],
    ["41108", "Salisbury"],
    ["41216", "San Diego"],
    ["41367", "Sandisfield"],
    ["41372", "Sandown"],
    ["41388", "Sandwich"],
    ["41610", "Saugus"],
    ["41655", "Savoy"],
    ["41713", "Scarborough"],
    ["41716", "Scarsdale"],
    ["41818", "Scituate"],
    ["41817", "Scituate"],
    ["41837", "Scotland"],
    ["41923", "Seabrook"],
    ["42099", "Seekonk"],
    ["42280", "Seymour"],
    ["42398", "Sharon"],
    ["42393", "Sharon"],
    ["42501", "Sheffield"],
    ["42515", "Shelburne"],
    ["42577", "Shelton"],
    ["42613", "Sherborn"],
    ["42638", "Sherman"],
    ["42747", "Shirley"],
    ["42821", "Shrewsbury"],
    ["42842", "Shutesbury"],
    ["43053", "Simsbury"],
    ["43263", "Smithfield"],
    ["43452", "Somers"],
    ["43455", "Somers"],
    ["43466", "Somerset"],
    ["43478", "Somersworth"],
    ["43491", "Somerville"],
    ["43483", "Somerville"],
    ["43681", "South Hadley"],
    ["43685", "South Hampton"],
    ["43720", "South Kingstown"],
    ["43897", "South Windsor"],
    ["43907", "Southampton"],
    ["43915", "Southborough"],
    ["43916", "Southbridge"],
    ["43918", "Southbury"],
    ["43920", "Southeast"],
    ["43937", "Southington"],
    ["43964", "Southwick"],
    ["44056", "Spencer"],
    ["44126", "Sprague"],
    ["44213", "Spring Valley"],
    ["44254", "Springfield"],
    ["44355", "Stafford"],
    ["44361", "Stafford Springs"],
    ["44379", "Stamford"],
    ["44636", "Sterling"],
    ["44641", "Sterling"],
    ["44703", "Stewartstown"],
    ["44760", "Stockbridge"],
    ["44801", "Stoddard"],
    ["44830", "Stoneham"],
    ["44859", "Stonington"],
    ["44877", "Stony Point"],
    ["44907", "Stoughton"],
    ["44923", "Stow"],
    ["44935", "Strafford"],
    ["44957", "Stratford"],
    ["44970", "Stratham"],
    ["45069", "Sturbridge"],
    ["45106", "Sudbury"],
    ["45113", "Suffield"],
    ["45164", "Sullivan"],
    ["45309", "Sunapee"],
    ["45323", "Sunderland"],
    ["45470", "Sutton"],
    ["45490", "Swampscott"],
    ["45516", "Swansea"],
    ["45525", "Swanzey"],
    ["45873", "Tarrytown"],
    ["45893", "Taunton"],
    ["46007", "Temple"],
    ["46019", "Templeton"],
    ["46112", "Tewksbury"],
    ["46217", "Thomaston"],
    ["46231", "Thompson"],
    ["46287", "Thornton"],
    ["46416", "Tilton"],
    ["46504", "Tisbury"],
    ["46515", "Tiverton"],
    ["46585", "Tolland"],
    ["46584", "Tolland"],
    ["46676", "Topsfield"],
    ["46703", "Torrington"],
    ["46753", "Townsend"],
    ["47000", "Troy"],
    ["47031", "Trumbull"],
    ["47034", "Truro"],
    ["47067", "Tuftonboro"],
    ["47305", "Tyngsborough"],
    ["47310", "Tyringham"],
    ["47390", "Union"],
    ["47632", "Upton"],
    ["48559", "Uxbridge"],
    ["48944", "Vernon"],
    ["49481", "Voluntown"],
    ["49613", "Wakefield"],
    ["49617", "Wakefield"],
    ["49620", "Wakefield"],
    ["49667", "Wales"],
    ["49745", "Wallingford"],
    ["49803", "Walpole"],
    ["49805", "Walpole"],
    ["49823", "Waltham"],
    ["49891", "Wappinger"],
    ["49892", "Wappingers Falls"],
    ["49928", "Ware"],
    ["49931", "Wareham"],
    ["49952", "Warner"],
    ["49980", "Warren"],
    ["49974", "Warren"],
    ["49965", "Warren"],
    ["49969", "Warren"],
    ["50036", "Warwick"],
    ["50031", "Warwick"],
    ["50072", "Washington"],
    ["50065", "Washington"],
    ["50056", "Washington"],
    ["50134", "Waterbury"],
    ["50143", "Waterford"],
    ["50181", "Watertown"],
    ["50183", "Watertown"],
    ["50200", "Waterville Valley"],
    ["50328", "Wayland"],
    ["50376", "Weare"],
    ["50415", "Webster"],
    ["50521", "Wellesley"],
    ["50524", "Wellfleet"],
    ["50591", "Wendell"],
    ["50600", "Wenham"],
    ["50705", "West Boylston"],
    ["50714", "West Bridgewater"],
    ["50719", "West Brookfield"],
    ["50852", "West Greenwich"],
    ["50867", "West Hartford"],
    ["50869", "West Hartland"],
    ["50872", "West Haven"],
    ["50989", "West Newbury"],
    ["51087", "West Springfield"],
    ["51094", "West Stockbridge"],
    ["51104", "West Tisbury"],
    ["51139", "West Warwick"],
    ["51169", "Westborough"],
    ["51170", "Westbrook"],
    ["51191", "Westerly"],
    ["51211", "Westfield"],
    ["51222", "Westford"],
    ["51229", "Westhampton"],
    ["51252", "Westminster"],
    ["51277", "Weston"],
    ["51271", "Weston"],
    ["51316", "Westport"],
    ["51312", "Westport"],
    ["51356", "Westwood"],
    ["51367", "Wethersfield"],
    ["51391", "Weymouth"],
    ["51407", "Whately"],
    ["51559", "White Plains"],
    ["51597", "Whitefield"],
    ["51691", "Whitman"],
    ["51772", "Wilbraham"],
    ["51895", "Williamsburg"],
    ["51926", "Williamstown"],
    ["51946", "Willington"],
    ["52036", "Wilmington"],
    ["52048", "Wilmot"],
    ["52104", "Wilton"],
    ["52098", "Wilton"],
    ["52115", "Winchendon"],
    ["52119", "Winchester"],
    ["52127", "Winchester"],
    ["52125", "Winchester"],
    ["52152", "Windham"],
    ["52156", "Windham"],
    ["52170", "Windsor"],
    ["52174", "Windsor"],
    ["52192", "Windsor Locks"],
    ["52326", "Winthrop"],
    ["52391", "Woburn"],
    ["52398", "Wolcott"],
    ["52423", "Wolfeboro"],
    ["52483", "Woodbridge"],
    ["52493", "Woodbury"],
    ["52610", "Woodstock"],
    ["52616", "Woodstock"],
    ["52667", "Woonsocket"],
    ["52674", "Worcester"],
    ["52673", "Worcester"],
    ["52702", "Worthington"],
    ["52721", "Wrentham"],
    ["52869", "Yarmouth"],
    ["52870", "Yarmouth"],
    ["52939", "Yonkers"],
    ["52943", "York"],
    ["52966", "Yorktown"],
    ["52969", "Yorktown Heights"]];    

    

    const city_map = {
        "RI" : ["Barrington",
        "Bristol",
        "Burrillville",
        "Central Falls",
        "Charlestown",
        "Coventry",
        "Cranston",
        "Cumberland",
        "East Greenwich",
        "East Providence",
        "Exeter",
        "Foster",
        "Glocester",
        "Hopkinton",
        "Jamestown",
        "Johnston",
        "Lincoln",
        "Little Compton",
        "Middletown",
        "Narragansett",
        "New Shoreham",
        "Newport",
        "North Kingstown",
        "North Providence",
        "North Smithfield",
        "Pawtucket",
        "Portsmouth",
        "Providence",
        "Richmond",
        "Scituate",
        "Smithfield",
        "South Kingstown",
        "Tiverton",
        "Warren",
        "Warwick",
        "West Greenwich",
        "West Warwick",
        "Westerly",
        "Woonsocket"],
        "MA": ["Amherst",
        "Arlington",
        "Attleboro",
        "Barnstable",
        "Beverly",
        "Billerica",
        "Boston",
        "Brockton",
        "Brookline",
        "Cambridge",
        "Chicopee",
        "Everett",
        "Fall River",
        "Fitchburg",
        "Framingham",
        "Haverhill",
        "Lawrence",
        "Leominster",
        "Lowell",
        "Lynn",
        "Malden",
        "Marlborough",
        "Medford",
        "Methuen",
        "New Bedford",
        "Newton",
        "Peabody",
        "Pittsfield",
        "Plymouth",
        "Quincy",
        "Revere",
        "Salem",
        "Somerville",
        "Springfield",
        "Taunton",
        "Waltham",
        "Westfield",
        "Weymouth",
        "Woburn",
        "Worcester"],
        "CT": ["Branford",
        "Bridgeport",
        "Bristol",
        "Cheshire",
        "Danbury",
        "East Hartford",
        "East Haven",
        "Enfield",
        "Fairfield",
        "Glastonbury",
        "Greenwich",
        "Groton",
        "Hamden",
        "Hartford",
        "Manchester",
        "Mansfield",
        "Meriden",
        "Middletown",
        "Milford",
        "Naugatuck",
        "New Britain",
        "New Haven",
        "New London",
        "New Milford",
        "Newington",
        "Newton",
        "Norwalk",
        "Norwich",
        "Shelton",
        "Southington",
        "Stamford",
        "Stratford",
        "Torrington",
        "Trumbull",
        "Vernon",
        "Wallingford",
        "Waterbury",
        "West Hartford",
        "West Haven",
        "Windsor"],
    }

    function getLink(city, the_state) {
        // console.log(idx);
        // console.log(cityLinks[city])
        const dupe_key = `${city}_${the_state}`;
        if(dupe_key in dupe_city_links){
            return (<a href={dupe_city_links[dupe_key]} target="_blank">{city}</a>);
        } else {
            return (<a href={cityLinks[city]} target="_blank">{city}</a>);
        }
    }

    function loadMoreCities(state_abbr){
        const tmore = {...moreClicked};
        tmore[state_abbr] = true;
        setMoreClicked(tmore);
    }

    function doMobileClicked(state_abbr){
        const tmobile = {...mobileClicked};
        if(tmobile[state_abbr] === ""){
            tmobile[state_abbr] = styles['open'];
        } else {
            tmobile[state_abbr] = "";
        }
        setMobileClicked(tmobile);
    }

    useEffect(() => {
        // if(main_component_style && main_component_style === "gray") {
        //     setMainComponentStyle(styles['main-component-gray']);
        // }
        // if(centered_style){
        //     // setCenteredStyle(centered_style);
        // }
        let city_links = {};
        for(let i = 0; i < city_codes.length; i++) {
            let city_code = city_codes[i][0];
            let city_name = city_codes[i][1];
            let tlink = "https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=sfr&ccz=city&lp=100000&per=25&srt=newest";
            if(city_name in city_links) {
                tlink = city_links[city_name];
            }
            tlink += `&city[]=${city_code}`;
            city_links[city_name] = tlink;
            // console.log(city_name);
        }

        setCityLinks(city_links);

        // https://homeeasyhomes.idxbroker.com/idx/results/listings?pt=sfr&ccz=city&lp=100000&per=25&srt=newest&city[]=2679&city[]=2677

        // console.log(cityLinks);


        // setTimeout(() => {
        //     setTempStyle(styles['open']);
        // }, 2000);

        // setTimeout(() => {
        //     setTempStyle('');
        // }, 4000);


    }, []);


    return (
        <div>
            <div className={styles[main_component_style]}>
                <div className={`${styles['main-component-content-container']} ${centered_style}`}>
 





                    <div className={styles['main-component-link-group']}>   
                        {/* <div className={styles['main-component-link-group-items']}>    */}
                    
                        {/* <div className={styles['main-component-link-group-title']}>Search for Homes in Rhode Island</div> */}
                        <div className={`${styles['main-component-link-group-items']} ${mobileClicked['RI']}`}>   

                        <div onClick={()=>{doMobileClicked('RI');}} className={`${styles['main-component-link-group-title']} ${mobileClicked['RI']}`}>Search for Homes in Rhode Island</div>

                        {windowSize.width < 1024  && moreClicked["RI"] === false &&

                        <div className={styles['main-component-link-group-links']}>


                        {city_map["RI"].slice(0, 7).map((city, idx) => {
                                return (
                                <div key={idx} className={styles['main-component-link-group-link']}>
                                    {getLink(city, "RI")}
                                </div>
                            )
                        })}
                        </div>
                        }


                        {(windowSize.width > 1023  || moreClicked["RI"]) &&

                        <div className={styles['main-component-link-group-links']}>


                        {city_map["RI"].map((city, idx) => {
                                return (
                                <div key={idx} className={styles['main-component-link-group-link']}>
                                    {getLink(city, "RI")}
                                </div>
                            )
                        })}
                        </div>
                        }


                        {windowSize.width < 1024 && !moreClicked['RI'] &&
                        <div onClick={()=>{loadMoreCities("RI");}} className={styles["morelink"]}>More</div>
                        }
                        </div>
                    </div>





                    <div className={styles['main-component-link-group']}>
                        {/* <div className={styles['main-component-link-group-items']}>    */}

                        {/* <div className={styles['main-component-link-group-title']}>Search for Homes in Massachusetts</div> */}
                        <div className={`${styles['main-component-link-group-items']} ${mobileClicked['MA']}`}>   

                        <div onClick={()=>{doMobileClicked('MA');}} className={`${styles['main-component-link-group-title']} ${mobileClicked['MA']}`}>Search for Homes in Massachusetts</div>
                        
                        {windowSize.width < 1024  && moreClicked["MA"] === false &&

                        <div className={styles['main-component-link-group-links']}>


                        {city_map["MA"].slice(0, 7).map((city, idx) => {
                                return (
                                <div key={idx} className={styles['main-component-link-group-link']}>
                                    {getLink(city, "MA")}
                                </div>
                            )
                        })}
                        </div>
                        }


                        {(windowSize.width > 1023  || moreClicked["MA"]) &&

                        <div className={styles['main-component-link-group-links']}>


                        {city_map["MA"].map((city, idx) => {
                                return (
                                <div key={idx} className={styles['main-component-link-group-link']}>
                                    {getLink(city, "MA")}
                                </div>
                            )
                        })}
                        </div>
                        }


                        {windowSize.width < 1024 && !moreClicked['MA'] &&
                        <div onClick={()=>{loadMoreCities("MA");}} className={styles["morelink"]}>More</div>
                        }
                        </div>
                    </div>


                    


                    <div className={styles['main-component-link-group']}>
                        <div className={`${styles['main-component-link-group-items']} ${mobileClicked['CT']}`}>   

                        <div onClick={()=>{doMobileClicked('CT');}} className={`${styles['main-component-link-group-title']} ${mobileClicked['CT']}`}>Search for Homes in Connecticut</div>
                        
                        {windowSize.width < 1024  && moreClicked["CT"] === false &&

                        <div className={styles['main-component-link-group-links']}>


                        {city_map["CT"].slice(0, 7).map((city, idx) => {
                                return (
                                <div key={idx} className={styles['main-component-link-group-link']}>
                                    {getLink(city, "CT")}
                                </div>
                            )
                        })}
                        </div>
                        }


                        {(windowSize.width > 1023  || moreClicked["CT"]) &&

                        <div className={styles['main-component-link-group-links']}>


                        {city_map["CT"].map((city, idx) => {
                                return (
                                <div key={idx} className={styles['main-component-link-group-link']}>
                                    {getLink(city, "CT")}
                                </div>
                            )
                        })}
                        </div>
                        }


                        {windowSize.width < 1024 && !moreClicked['CT'] &&
                        <div onClick={()=>{loadMoreCities("CT");}} className={styles["morelink"]}>More</div>
                        }
                        </div>
                    </div>


                                        
                    


                </div>
            </div>
        </div>
    );
};
export default HomeSearchLinks;