/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Brands-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'brnds-addthis': '&#xe900;',
		'brnds-adobeacrobatreader': '&#xe901;',
		'brnds-applemusic': '&#xe902;',
		'brnds-atom': '&#xe903;',
		'brnds-behance': '&#xe904;',
		'brnds-bitcoin': '&#xe905;',
		'brnds-bitly': '&#xe906;',
		'brnds-bootstrap': '&#xe907;',
		'brnds-buffer': '&#xe908;',
		'brnds-buzzfeed': '&#xe909;',
		'brnds-codeforces': '&#xe90a;',
		'brnds-codeigniter': '&#xe90b;',
		'brnds-codepen': '&#xe90c;',
		'brnds-coursera': '&#xe90d;',
		'brnds-css3': '&#xe90e;',
		'brnds-csswizardry': '&#xe90f;',
		'brnds-deezer': '&#xe910;',
		'brnds-discourse': '&#xe911;',
		'brnds-disqus': '&#xe912;',
		'brnds-dribbble': '&#xe913;',
		'brnds-dropbox': '&#xe914;',
		'brnds-facebook': '&#xe915;',
		'brnds-feedly': '&#xe916;',
		'brnds-flickr': '&#xe917;',
		'brnds-foursquare': '&#xe918;',
		'brnds-garmin': '&#xe919;',
		'brnds-ghost': '&#xe91a;',
		'brnds-github': '&#xe91b;',
		'brnds-gitlab': '&#xe91c;',
		'brnds-glassdoor': '&#xe91d;',
		'brnds-gmail': '&#xe91e;',
		'brnds-google': '&#xe91f;',
		'brnds-googleallo': '&#xe920;',
		'brnds-googleanalytics': '&#xe921;',
		'brnds-googlechrome': '&#xe922;',
		'brnds-googledrive': '&#xe923;',
		'brnds-googlehangouts': '&#xe924;',
		'brnds-googleplay': '&#xe925;',
		'brnds-googleplus': '&#xe926;',
		'brnds-html5': '&#xe927;',
		'brnds-instagram': '&#xe928;',
		'brnds-invision': '&#xe929;',
		'brnds-javascript': '&#xe92a;',
		'brnds-jquery': '&#xe92b;',
		'brnds-koding': '&#xe92c;',
		'brnds-lastfm': '&#xe92d;',
		'brnds-linkedin': '&#xe92e;',
		'brnds-macys': '&#xe92f;',
		'brnds-mailchimp': '&#xe930;',
		'brnds-mailru': '&#xe931;',
		'brnds-medium': '&#xe932;',
		'brnds-messenger': '&#xe933;',
		'brnds-microblog': '&#xe934;',
		'brnds-minutemailer': '&#xe935;',
		'brnds-monero': '&#xe936;',
		'brnds-monogram': '&#xe937;',
		'brnds-odnoklassniki': '&#xe938;',
		'brnds-onedrive': '&#xe939;',
		'brnds-opera': '&#xe93a;',
		'brnds-overcast': '&#xe93b;',
		'brnds-paypal': '&#xe93c;',
		'brnds-periscope': '&#xe93d;',
		'brnds-pinterest': '&#xe93e;',
		'brnds-pocket': '&#xe93f;',
		'brnds-react': '&#xe940;',
		'brnds-redux': '&#xe941;',
		'brnds-reverbnation': '&#xe942;',
		'brnds-salesforce': '&#xe943;',
		'brnds-sellfy': '&#xe944;',
		'brnds-shazam': '&#xe945;',
		'brnds-signal': '&#xe946;',
		'brnds-sitepoint': '&#xe947;',
		'brnds-skype': '&#xe948;',
		'brnds-slack': '&#xe949;',
		'brnds-slashdot': '&#xe94a;',
		'brnds-snapchat': '&#xe94b;',
		'brnds-sparkpost': '&#xe94c;',
		'brnds-spotify': '&#xe94d;',
		'brnds-telegram': '&#xe94e;',
		'brnds-tinder': '&#xe94f;',
		'brnds-toggl': '&#xe950;',
		'brnds-trello': '&#xe951;',
		'brnds-twilio': '&#xe952;',
		'brnds-twitch': '&#xe953;',
		'brnds-twitter': '&#xe954;',
		'brnds-twoo': '&#xe955;',
		'brnds-unsplash': '&#xe956;',
		'brnds-viber': '&#xe957;',
		'brnds-vimeo': '&#xe958;',
		'brnds-vine': '&#xe959;',
		'brnds-visa': '&#xe95a;',
		'brnds-vk': '&#xe95b;',
		'brnds-whatsapp': '&#xe95c;',
		'brnds-wheniwork': '&#xe95d;',
		'brnds-yandex': '&#xe95e;',
		'brnds-ycombinator': '&#xe95f;',
		'brnds-yelp': '&#xe960;',
		'brnds-youtube': '&#xe961;',
		'brnds-zapier': '&#xe962;',
		'brnds-zendesk': '&#xe963;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/brnds-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
