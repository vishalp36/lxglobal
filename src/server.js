import React from 'react';

export default class Server {
    // eslint-disable-next-line
    apply(serverHandler) {
        serverHandler.hooks.beforeHtmlRender.tapPromise('ThemeColor', async(Application) => {
            const { htmlProps: { head } } = Application;
            head.push(
                ( <
                    meta key = "meta-theme-color"
                    name = "theme-color"
                    content = "#209cee" / >
                )
            );
            head.push(
                ( <
                    meta key = "meta-viewport"
                    name = "viewport"
                    content = "width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" /
                    >
                )
            );
            // head.push(
            //     ( <
            //         link key = "nunito"
            //         href = { 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap' }
            //         rel = "stylesheet" /
            //         >
            //     ),
            // );
        });
    }
}