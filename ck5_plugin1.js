class TestPlugin extends Qrk_Plugin {
    init() {
        const editor = this.editor;
        // The button must be registered among the UI components of the editor
        // to be displayed in the toolbar.
        editor.ui.componentFactory.add('customButton', () => {
            // The button will be an instance of ButtonView.
            const button = new Qrk_ButtonView();

            button.set({
                label: 'Custom Button',
                withText: true
            });

            // Execute a callback function when the button is clicked.
            button.on('execute', () => {
                const now = new Date();

                // Change the model using the model writer.
                editor.model.change((writer) => {
                    // Insert the text at the user's current position.
                    editor.model.insertContent(writer.createText(now.toString()));
                });
            });

            return button;
        });
    }

};

// Add into Qrk_Plugins and Qrk_Buttons to register and show in toolbar
window.Qrk_Plugins.push(TestPlugin);
window.Qrk_Buttons.push('Custom Button');
