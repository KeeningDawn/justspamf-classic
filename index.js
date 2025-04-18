module.exports = function JSFClassic(mod) {
	let enabled = true;
	const replaceTypes = new Set([1, 2, 3, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]);

	mod.dispatch.addDefinition('S_DIALOG', 99, __dirname + '/S_DIALOG.def', true);

	mod.hook('S_DIALOG', 99, (event) => {
		if (!enabled || !event.buttons.length) return;

		const buttons = event.buttons;
		let modified = false;

		for (let i = 0, len = buttons.length; i < len; i++) {
			if (replaceTypes.has(buttons[i].type)) {
				buttons[i].type = 33;
				modified = true;
			}
		}

		if (!modified) return;

		event.type = 1;
		return true;
	});

	mod.command.add('jsf', () => {
		enabled = !enabled;
		mod.command.message(`Just Spam F is ${enabled ? 'en' : 'dis'}abled.`);
	});
};
