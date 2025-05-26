import { Activities, Goals } from '../blocks';
import { Card, Title } from '../ui';
import { ChartNoAxesCombined, Goal } from 'lucide-react';

export const HomePage = () => {
    return (
        <section className='relative w-full'>
            <Title className='mb-7 last:mb-0'>Home Page</Title>

            <div className='grid lg:grid-cols-2 gap-5 w-full'>
                <Card>
                    <Card.Title icon={ChartNoAxesCombined}>User Activity</Card.Title>
                    <Card.Body>
                        <Activities />
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Title icon={Goal}>Goal Completion</Card.Title>
                    <Card.Body>
                        <Goals />
                    </Card.Body>
                </Card>
            </div>
        </section>
    );
};
