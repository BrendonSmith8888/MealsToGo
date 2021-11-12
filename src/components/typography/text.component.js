import styled from "styled-components";

const defaultTextStyles = (theme) =>`
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    margin-bottom: 0px;
    margin-top: 0px;
`;

const body = (theme) =>`
    font-size: ${theme.fontSizes.body};
`;

const caption = (theme) =>`
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const error = (theme) =>`
    color: ${theme.colors.text.error};
`;

const hint = (theme) =>`
    font-size: ${theme.fontSizes.body};
`;

const label = (theme) =>`
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = {
    body,
    caption,
    error,
    hint,
    label,
};

//<Text variant="something"/>
export const Text = styled.Text`
    ${({theme}) => defaultTextStyles(theme)}
    ${({variant, theme}) => variants[variant](theme)}
`;

Text.defaultProps = {
    variant: "body",
};