
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Button from '@mui/material/Button';

import "./Cards.css";

const AutoPlaySwipeableViews = SwipeableViews;

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];



function Cards() {

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (<div className="cards-container">
        <div className="available">Available balance</div>
        <div className="cards-top-container">
            <div className="green-row"><div className="green-container">S$</div> <span className="amount"> 3,000</span></div>
            <Button className="new-card-btn" variant="contained">New Card</Button>
        </div>

        <div>My debit cards</div>

        <div className="card-carousel-container">

            <Box sx={{ maxWidth: "30vw", flexGrow: 1 }}>
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        alignSelf: "right",
                        height: 50,
                        pl: 2,
                        bgcolor: 'background.default',
                        color: "#01D167",
                        fontSize: "12px",
                        fontWeight: "bold",
                        marginLeft: "19.5vw",
                        cursor: "pointer"
                    }}
                >

                    Show Card Number

                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <div className='credit-card-box'>
                                    <img src="images/aspire-logo-white.svg" className='card-logo'></img>

                                    <div className='white-text'>Mark Henry</div>

                                    <div className='d-flex mt-20 align-items-center'>
                                        <div className='dot'></div>
                                        <div className='dot'></div>
                                        <div className='dot'></div>
                                        <div className='dot'></div>
                                        <div className='mr-10'></div>
                                        <div className='dot'></div>
                                        <div className='dot'></div>
                                        <div className='dot'></div>
                                        <div className='dot'></div>
                                        <div className='mr-10'></div>
                                        <div className='dot'></div>
                                        <div className='dot'></div>
                                        <div className='dot'></div>
                                        <div className='dot'></div>
                                        <div className='mr-10'></div>

                                        <div className='unmask-number'>2020</div>
                                    </div>

                                    <div className='card-second-line'>Thru: 12/20 <span className='ml-20'> CVV: <span className='cvv'>***</span></span></div>
                                    <img className='visa-logo' src="images/visa.svg" />
                                </div>
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                            {theme.direction === 'rtl' ? (
                                "<"
                            ) : (
                                ">"
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                ">"
                            ) : (
                                "<"
                            )}
                            Back
                        </Button>
                    }
                />
            </Box>

        </div>
    </div>)
}

export default Cards