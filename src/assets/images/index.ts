import logo from './logo.png';
import iconFragment from './iconFragment.png';
import iconHtml from './iconHtml.png';
import iconURL from './iconURL.png';


interface IImages {
    logo?: string;
    iconFragment?: string;
    iconHtml?:string;
    iconURL?:string;
}
const images: IImages = {
    logo: logo,
    iconFragment: iconFragment,
    iconHtml:iconHtml,
    iconURL:iconURL
}

export default images;