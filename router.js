
const Wiadomosci = {
	template: '#wiadomosci'
}

const Grafika = {
	template: '#grafika'
}
const Zakupy = {
	template: '#zakupy'
}
const Filmy = {
	template: '#filmy'
}
const Wiecej = {
	template: '#wiecej'
}
const Ustawienia = {
	template: '#ustawienia'
}
const Narzedzia = {
	template: '#narzedzia'
}

const routes = [

	{ path: '/wiadomosci', component: Wiadomosci },
	{ path: '/grafika', component: Grafika },
	{ path: '/zakupy', component: Zakupy },
	{ path: '/filmy', component: Filmy },
	{ path: '/wiecej', component: Wiecej },
	{ path: '/ustawienia', component: Ustawienia },
	{ path: '/narzedzia', component: Narzedzia },
]

const router = new VueRouter({
	routes
});


const app = new Vue({
	router,
}).$mount('#sec_line')

