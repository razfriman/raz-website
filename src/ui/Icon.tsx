type IconName =
    | 'github'
    | 'linkedin'
    | 'email'
    | 'share'
    ;

export const Icon = ({
    icon,
    color,
    size = 24,
}: {
    icon: IconName,
    color?: string,
    size?: number | string,
}) => {
    let styles = {
        fill: color ?? "currentcolor",
        verticalAlign: "middle",
        width: size,
        height: size,
    };
    const renderGraphic = () => {
        switch (icon) {
            case 'github':
                return (
                    <g><path d="M7.2 6.6h-.1c-.5 1.4-.2 2.3-.1 2.6-.6.7-1 1.6-1 2.6 0 3.8 2.4 4.6 4.6 4.9-.2 0-.6.2-.8.8-.4.2-1.8.7-2.6-.7 0 0-.5-.8-1.3-.9 0 0-.8 0-.1.5 0 0 .6.3.9 1.3 0 0 .5 1.7 3 1.1v3.1h5v-3.5c0-1-.4-1.5-.8-1.8 2.2-.2 4.6-1 4.6-4.8 0-1.1-.4-2-1-2.6.1-.3.4-1.2-.1-2.6 0 0-.8-.3-2.7 1-.8-.2-1.6-.3-2.5-.3-.8 0-1.7.1-2.5.3-1.4-1-2.2-1-2.6-1zm12.8 15.4h-16c-1.1 0-2-.9-2-2v-16c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2z"></path></g>
                );
            case 'linkedin':
                return (
                    <g><path d="M20 2h-16c-1.1 0-1.99.9-1.99 2l-.01 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm-12 17h-3v-9h3v9zm-1.5-10.69c-1 0-1.81-.81-1.81-1.81s.81-1.81 1.81-1.81 1.81.81 1.81 1.81-.81 1.81-1.81 1.81zm12.5 10.69h-3v-5.3c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.3h-3v-9h3v1.2c.52-.84 1.59-1.4 2.5-1.4 1.93 0 3.5 1.57 3.5 3.5v5.7z"></path></g>
                );
            case 'email':
                return (
                    <g><path d="M20 4h-16c-1.1 0-1.99.9-1.99 2l-.01 12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 4l-8 5-8-5v-2l8 5 8-5v2z"></path></g>
                );
            case 'share':
                return (
                    <g><path d="M19 19h-14v-14h7v-2h-7c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zm-5-16v2h3.59l-9.83 9.83 1.41 1.41 9.83-9.83v3.59h2v-7h-7z"></path></g>
                );
        }
    };
    return (
        <svg viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            style={styles}>
            {renderGraphic()}
        </svg>
    )
};