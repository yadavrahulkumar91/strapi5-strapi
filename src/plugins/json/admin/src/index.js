import ColorPickerIcon from "./components/PluginIcon/index";
import Input from "./components/Input/index"
import React from "react";


export default {
  register(app) {
    // ... app.addMenuLink() goes here
    // ... app.registerPlugin() goes here

    app.customFields.register({
      name: "json",
      pluginId: "json", // the custom field is created by a color-picker plugin
      type: "json", // the color will be stored as a string
      intlLabel: {
        id: "json.json.label",
        defaultMessage: "JSON",
      },
      intlDescription: {
        id: "json.json.description",
        defaultMessage: "Format the JSON",
      },
      icon: ColorPickerIcon, // don't forget to create/import your icon component
      components: {
        Input: async () =>
          import(
            /* webpackChunkName: "input-component" */ "./components/Input/index.js"
            // /* webpackChunkName: "input-component" */ "./components/Input/input1.js"
            // /* webpackChunkName: "input-component" */ "./components/Input/codemirror2.js"
            // /* webpackChunkName: "input-component" */ "./components/Input/react-codemirror2.js"
            // /* webpackChunkName: "input-component" */ "./components/Input/new.js"

          ),
        // <Input/>

      },
      options: {
        // declare options here
      },
    });
  },

  // ... bootstrap() goes here
};