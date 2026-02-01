import { IconCheck, IconCode, IconBrandReact, IconShoppingCart } from '@tabler/icons-react';
import {
    ActionIcon,
    Badge,
    Box,
    Button,
    Card,
    Container,
    Group,
    Image,
    List,
    SimpleGrid,
    Stack,
    Text,
    Textarea,
    TextInput,
    ThemeIcon,
    Title,
    useMantineTheme,
} from '@mantine/core';
import image from '../assets/1.jpg';
import './home.css';

import { IconBrandGithub } from '@tabler/icons-react';



export function HeroBullets() {
    return (
        <div id='hero' className="home-container">
            <Container size="lg">
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', padding: '2rem 0', justifyContent: 'center', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ flex: '0 0 50%' }}>
                        <Title order={1} size="h4" fw={500} style={{ lineHeight: 1.2, color: '#ffffff' }}>
                            Hey Im Ahmed Laghari

                        </Title>
                        <Title order={1} size="h1" fw={600} style={{ lineHeight: 1.2, color: '#18A5C6', fontSize: '5rem', }}>

                            FrontEnd<br /> Developer
                        </Title>
                        <Text style={{ marginTop: '1rem' }} size="lg" c="#ffffff">
                            I'm a frontend developer based in Karachi(Pakistan), I'll help you build beautiful websites your users will love.
                        </Text>

                        <List
                            mt={30}
                            spacing="sm"
                            size="sm"
                            icon={
                                <ThemeIcon size={20} radius="xl">
                                    <IconCheck size={12} stroke={1.5} />
                                </ThemeIcon>
                            }
                            style={{ color: 'white' }}
                        >
                            <List.Item style={{ color: 'white' }}>
                                <b>WordPress Developer</b> – Built fast,
                                responsive, and SEO-friendly WordPress websites with custom themes, plugins, and real client experience.
                            </List.Item>
                            <List.Item style={{ color: 'white' }}>
                                <b>React Developer</b> – Create modern, high-performance React apps using reusable components and clean, scalable code.
                            </List.Item>

                        </List>

                        <Group mt={30}>
                            <Button radius="xl" size="sm">
                                Get In Touch
                            </Button>
                            <Button
                                component="a"
                                href="https://www.linkedin.com/in/ahmed-laghari-863b05250/"

                                target="_blank"
                                rel="noopener noreferrer"
                                variant="default"
                                radius="xl"
                                size="sm"
                            >
                                View LinkedIn
                            </Button>
                        </Group>
                    </div>
                    <Image src={image} style={{ flex: '0 0 40%', maxWidth: '500px', padding: '1rem', borderRadius: '25px' }} />
                </div>
            </Container>
        </div>
    );
}



export function HeroTitle() {
    return (
        <div id="hero" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem 1rem'
        }}>
            <Container size={700} style={{ textAlign: 'center' }}>
                <h1 style={{
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    fontWeight: 900,
                    lineHeight: 1.2,
                    marginBottom: '1.5rem',
                    color: '#18A5C6',
                    textAlign: 'center'
                }}>
                    My Story
                </h1>

                <Text

                    size="lg"
                    style={{
                        fontSize: '1.25rem',
                        color: '#ffffff',
                        textAlign: 'center'
                    }}
                >
                    I’m a Full Stack Web Developer with 2+ years of experience building fast, scalable,
                    and user-focused web applications. I specialize in WordPress development,
                    turning Figma designs into high-performance websites using modern tools and clean code.
                    I also have strong knowledge of React and actively build projects with it, focusing on reusable components
                    and smooth user experiences. I’ve worked with teams and clients across Pakistan, Dubai, and Saudi Arabia,
                    delivering reliable digital solutions that make an impact.
                </Text>


            </Container>
        </div>
    );
}

// epxeierence section
import { useState } from "react";



type Experience = {
    company: string;
    role: string;
    duration: string;
    points: string[];
};

const experiences: Experience[] = [
    {
        company: "YJ Technologies",
        role: "WordPress Developer @ YJ Technologies",
        duration: " 05/2023 - 02/2024",
        points: [
            "Developed and shipped highly interactive web Apps WordPress, Elementor Pro, and custom coding",
            "Optimized website performance, SEO, and responsiveness for better user experience",
            "Collaborated with designers and backend developers to deliver seamless digital solutions",
        ],
    },
    {
        company: "Solution Fzco",
        role: "WordPress Developer @ Solution Fzco",
        duration: " 03/2024 - 08/2024",
        points: [
            "It was a brand-building agency with its headquarters in Dubai and an office in Karachi",
            "Developed and maintained WordPress websites for clients across various industries, ensuring high performance and SEO optimization",
        ],
    },
    {
        company: "Mabblez",
        role: "Senior WordPress Developer @ Mabblez",
        duration: "01/2025 - 08/2025",
        points: [
            "Led the development of custom WordPress themes and plugins to meet client requirements",
            "Collaborated with designers to improve UX",
        ],
    },

];

export default function ExperienceSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div id='experience'>
            <Box style={{ maxWidth: 1000, margin: "auto", padding: "60px 20px", backgroundColor: "#ffffff", borderRadius: 8 }}>
                <Title order={2} style={{ marginBottom: 40, color: "#18A5C6" }}>
                    Experience<span style={{ color: "#121213" }}>.</span>
                </Title>

                <Group align="flex-start" gap={50}>
                    {/* LEFT SIDE – COMPANY LIST */}
                    <Box style={{ position: "relative", minWidth: 150 }}>
                        {/* Slider */}
                        <Box
                            style={{
                                position: "absolute",
                                left: 0,
                                top: activeIndex * 40,
                                width: 3,
                                height: 25,
                                backgroundColor: "#18A5C6",
                                borderRadius: 4,
                                transition: "top 0.3s ease",
                                paddingTop: 2,
                                // paddingBottom: 2,
                                // marginTop: "10px",
                            }}
                        />

                        <Stack gap={20} style={{ paddingLeft: 16 }}>
                            {experiences.map((exp, index) => (
                                <Text
                                    key={exp.company}
                                    onClick={() => setActiveIndex(index)}
                                    style={{
                                        cursor: "pointer",
                                        fontWeight: activeIndex === index ? 600 : 400,
                                        color: activeIndex === index ? "#18A5C6" : "#000000",

                                    }}
                                >
                                    {exp.company}
                                </Text>))}
                        </Stack>
                    </Box>

                    {/* RIGHT SIDE – DETAILS */}
                    <Box style={{ flex: 1 }}>
                        <Title order={4} style={{ color: "#000000" }}>
                            {experiences[activeIndex].role}
                        </Title>

                        <Text size="sm" c="black" style={{ marginBottom: 20 }}>
                            {experiences[activeIndex].duration}
                        </Text>

                        <Stack gap={12}>
                            {experiences[activeIndex].points.map((point, i) => (
                                <Group key={i} align="flex-start" gap={10}>
                                    <ThemeIcon
                                        size={18}
                                        radius="xl"
                                        color="violet"
                                        variant="light"
                                    >
                                        <IconCheck size={12} />
                                    </ThemeIcon>
                                    <Text size="sm" style={{ color: "#000000" }}>{point}</Text>
                                </Group>
                            ))}
                        </Stack>
                    </Box>
                </Group>

            </Box >
        </div>
    );
}

// skills cards data

const mockdata = [
    {
        title: 'Wordpress Development',
        description:
            'I specialize in building high-performance, SEO-friendly WordPress websites using Elementor Pro, Gutenberg, and custom themes. I convert Figma designs into responsive, pixel-perfect websites, optimize performance, and ensure scalability for real-world business needs',
        icon: IconCode,
    },
    {
        title: 'React Development',
        description:
            'I build modern, component- based React applications with a focus on clean UI, reusable components, and performance.I have strong knowledge of React fundamentals and actively develop projects using modern frontend practices.',
        icon: IconBrandReact,
    },
    {
        title: 'Shopify Development',
        description:
            'TI develop and customize Shopify stores with a focus on clean design, smooth user experience, and conversion optimization. My work includes theme customization, store setup, and ensuring responsive, fast-loading eCommerce solutions.',
        icon: IconShoppingCart,
    },
];


const mockdata1 = [
    {
        title: 'Feature 1',
        description: 'Description for feature 1',
        icon: () => <div>Icon</div>, // Replace with your icon component
    },
    {
        title: 'Feature 2',
        description: 'Description for feature 2',
        icon: () => <div>Icon</div>,
    },
    {
        title: 'Feature 3',
        description: 'Description for feature 3',
        icon: () => <div>Icon</div>,
    },
];

export function FeaturesCards() {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
        <Card
            key={feature.title}
            shadow="md"
            radius="md"
            padding="xl"
            style={{
                backgroundColor: 'white',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '';
            }}
        >
            <feature.icon size={50} stroke={1.5} color={theme.colors.blue[6]} />
            <Text
                size="lg"
                fw={500}
                mt="md"
                style={{ color: '#18A5C6' }}
            >
                {feature.title}
            </Text>
            <Text
                size="sm"

                mt="sm"
            >
                {feature.description}
            </Text>
        </Card>
    ));

    return (
        <div id="skills">

            <Container
                size="xl"

                py="xl"
                style={{
                    backgroundColor: '#070F2B',
                    minHeight: '50vh',
                    display: 'flex',
                    // width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '3rem 1rem',
                    marginTop: '2rem'
                }}
            >


                <Title
                    order={2}

                    mt="sm"
                    style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                        fontWeight: 700,
                        color: '#18A5C6',
                        textAlign: 'center'

                    }}>

                    Skills
                </Title>



                <SimpleGrid
                    cols={{ base: 1, md: 3 }}
                    spacing="xl"
                    mt={50}
                >
                    {features}
                </SimpleGrid>
            </Container>
        </div>

    );
}

// 
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube, IconAt, IconMapPin, IconPhone, IconSun } from '@tabler/icons-react';

const social = [
    { Icon: IconBrandTwitter, label: 'Twitter' },
    { Icon: IconBrandYoutube, label: 'Youtube' },
    { Icon: IconBrandInstagram, label: 'Instagram' },
];

const mockdata2 = [
    { title: 'Email', description: 'ahmedlaghari27@gmail.com', icon: IconAt },
    { title: 'Phone', description: '+923178935717', icon: IconPhone },

];

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    icon: typeof IconSun;
    title: React.ReactNode;
    description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: '0.5rem 0'
            }}
            {...others}
        >
            <Box mr="md">
                <Icon size={24} style={{ color: '#38BDF8' }} />
            </Box>
            <div>
                <Text
                    size="xs"
                    style={{
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        color: '#9ca3af',
                        marginBottom: '0.25rem'
                    }}
                >
                    {title}
                </Text>
                <Text
                    style={{
                        color: 'white',
                        fontSize: '0.95rem'
                    }}
                >
                    {description}
                </Text>
            </div>
        </div>
    );
}

function ContactIconsList() {
    const items = mockdata2.map((item, index) => <ContactIcon key={index} {...item} />);
    return <Stack>{items}</Stack>;
}

export function ContactUs() {
    const icons = social.map(({ Icon, label }, index) => (
        <ActionIcon
            key={index}
            size={28}
            variant="transparent"
            aria-label={label}
            style={{
                color: '#38BDF8',
                transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.2)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
            }}
        >
            <Icon size={22} stroke={1.5} />
        </ActionIcon>
    ));

    return (
        <div id="contact">

            <div style={{
                backgroundColor: '#070F2B',
                padding: '4rem 2rem',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Container size="lg">
                    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
                        <div>
                            <Title
                                order={2}
                                style={{
                                    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                                    fontWeight: 700,
                                    color: 'white',
                                    marginBottom: '1rem'
                                }}
                            >
                                Contact us
                            </Title>
                            <Text
                                mt="sm"
                                mb={30}
                                style={{
                                    color: '#9ca3af',
                                    fontSize: '1.1rem',
                                    lineHeight: 1.6
                                }}
                            >
                                Leave your email and we will get back to you within 24 hours
                            </Text>
                            <ContactIconsList />
                            {/* <Group mt="xl">{icons}</Group> */}
                        </div>

                        <div style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                            <TextInput
                                label="Email"
                                placeholder="your@email.com"
                                required
                                radius="md"
                                styles={{
                                    input: {
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        color: 'white',
                                        '&::placeholder': {
                                            color: '#9ca3af'
                                        },
                                        '&:focus': {
                                            borderColor: '#38BDF8'
                                        }
                                    },
                                    label: {
                                        color: 'white',
                                        fontWeight: 500,
                                        marginBottom: '0.5rem'
                                    }
                                }}
                            />
                            <TextInput
                                label="Name"
                                placeholder="Ali Khan"
                                mt="md"
                                radius="md"
                                styles={{
                                    input: {
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        color: 'white',
                                        '&::placeholder': {
                                            color: '#9ca3af'
                                        },
                                        '&:focus': {
                                            borderColor: '#38BDF8'
                                        }
                                    },
                                    label: {
                                        color: 'white',
                                        fontWeight: 500,
                                        marginBottom: '0.5rem'
                                    }
                                }}
                            />
                            <Textarea
                                required
                                label="Your message"
                                placeholder="I want to hire you for..."
                                minRows={4}
                                mt="md"
                                radius="md"
                                styles={{
                                    input: {
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        color: 'white',
                                        '&::placeholder': {
                                            color: '#9ca3af'
                                        },
                                        '&:focus': {
                                            borderColor: '#38BDF8'
                                        }
                                    },
                                    label: {
                                        color: 'white',
                                        fontWeight: 500,
                                        marginBottom: '0.5rem'
                                    }
                                }}
                            />
                            <Group justify="flex-end" mt="md">
                                <Button
                                    radius="md"
                                    style={{
                                        backgroundColor: '#38BDF8',
                                        color: '#070F2B',
                                        fontWeight: 600,
                                        padding: '0.75rem 2rem',
                                        transition: 'all 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#0EA5E9';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#38BDF8';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    Send message
                                </Button>
                            </Group>
                        </div>
                    </SimpleGrid>
                </Container>
            </div>
        </div>

    );
}