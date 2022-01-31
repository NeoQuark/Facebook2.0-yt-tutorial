import {SearchIcon} from '@heroicons/react/outline';
import {DotsHorizontalIcon, VideoCameraIcon} from '@heroicons/react/solid';
import Contact from './Contact';

const contacts = [
	{ src:"https://media.gqmagazine.fr/photos/606577d57b2c2ebbd2921e05/2:3/w_1331,h_1997,c_limit/jeff%20bezos-813883140.jpg", name:"Jeff Bezos"},
	{ src:"https://www.sciencesetavenir.fr/assets/img/2016/09/02/cover-r4x3w1000-5834b11017175-elon-musk.jpg", name:"Elon Musk"},
	{ src:"https://static01.nyt.com/images/2020/11/20/multimedia/00Gates-1/00Gates-1-superJumbo.jpg", name:"Bill Gates"},
	{ src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg", name:"Mark Suckerberg"},
	{ src:"https://media.gqmagazine.fr/photos/61961af186304249e82b5241/3:4/w_675,h_900,c_limit/Harry-Potter.jpg", name:"Harry Potter"},
	{ src:"https://www.lalibre.be/resizer/4Rt7IG0RPS6fnkWAG8qLISAscTg=/768x512/filters:quality(70):format(jpg):focal(1275x856.5:1285x846.5)/cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/NYFGZIUORZG6ZG74HFJ3PC23KI.jpg", name:"The Queen"},
	{ src:"https://fr.web.img2.acsta.net/r_654_368/newsv7/20/10/03/10/35/5527130.jpg", name:"James Bond"},
]

function Widgets() {
	return (
		<div className="hidden lg:flex flex-col w-60 p-2 mt-5">
			<div className="flex justify-between items-center text-gray-500 mb-5">
				<h2 className="text-xl">Contacts</h2>
				<div className="flex space-x-2">
					<VideoCameraIcon className="h-6"/>
					<SearchIcon className="h-6"/>
					<DotsHorizontalIcon className="h-6"/>
				</div>
			</div>
			{contacts.map(contact => (
				<Contact key={contact.src} src={contact.src} name={contact.name}/>
			))}
		</div>
	)
}

export default Widgets;