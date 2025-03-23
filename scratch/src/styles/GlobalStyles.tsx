import { Global, css, useTheme } from "@emotion/react";

export default function GlobalStyles() {
    const theme = useTheme();

    return (
        <Global
            styles={css({
                'html, body': {
                    margin: 0,
                    padding: 0,
                    width: '100vw',
                    height: '100vh',
                    background: theme.color.bg,
                    color: theme.color.fg,
                    overflow: 'hidden'
                },
                '#root': {
                    maxWidth: '75vw',
                    height: '100vh',
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'auto',
                    '@media (max-width: 480px)': {
                        maxWidth: 'unset',
                        width: '100vw',
                    }
                }
            })}
        />
    )
}