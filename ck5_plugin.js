class TestPlugin extends Qrk_Plugin {
   init() {
      // Register a custom command
      this.editor.commands.add('myCustomCommand', {
         execute: () => {
            const now = new Date();
            // Change the model using the model writer.
            this.editor.model.change((writer) => {
            // Insert the text at the user's current position.
            this.editor.model.insertContent(writer.createText(now.toString()));
         });
        }
      });

      // Register the custom button for toolbar
      this.editor.ui.componentFactory.add('customButton', locale => {
         // Create button instance
         const view = new Qrk_ButtonView(locale);
         view.set({
           label: 'Custom Button',
           withText: true,
           tooltip: true
         });

        // Execute command when the button is clicked
        this.listenTo(view, 'execute', () => {
           this.editor.execute('myCustomCommand');
        });

        return view;
    });
  }
};

// Add into Qrk_Plugins to load into Editor
window.Qrk_Plugins.push(TestPlugin);
