import { CardBody } from './CardBody';
import { CardTitle } from './CardTitle';
import { CardWrapper } from './CardWrapper';

export const Card = Object.assign(CardWrapper, {
    Title: CardTitle,
    Body: CardBody,
});
