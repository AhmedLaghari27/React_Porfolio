import { useState } from "react";
import { IconCheck, IconCode, IconBrandReact, IconShoppingCart } from '@tabler/icons-react';
import emailjs from '@emailjs/browser';
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
import { IconBrandGithub, IconBrandInstagram, IconBrandTwitter, IconBrandYoutube, IconAt, IconMapPin, IconPhone, IconSun } from '@tabler/icons-react';

// ===================== HERO SECTION =====================
export function HeroBullets() {
    return (
        <div id='hero' style={{
            width: '100%',
            backgroundColor: '#070F2B',
            display: 'flex',
            justifyContent: 'center',
            padding: '2rem 0'
        }}>
            <Container size="xl" style={{ width: '100%', maxWidth: '1200px', padding: '0 1rem' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <div style={{
                        flex: '1 1 100%',
                        minWidth: '280px',
                        maxWidth: '600px'
                    }}>
                        <Title order={1} size="h4" fw={500} style={{
                            lineHeight: 1.2,
                            color: '#ffffff',
                            fontSize: 'clamp(1rem, 3vw, 1.25rem)'
                        }}>
                            Hey Im Ahmed Laghari
                        </Title>
                        <Title order={1} size="h1" fw={600} style={{
                            lineHeight: 1.2,
                            color: '#18A5C6',
                            fontSize: 'clamp(2rem, 8vw, 5rem)',
                            marginTop: '0.5rem'
                        }}>
                            FrontEnd<br /> Developer
                        </Title>
                        <Text style={{
                            marginTop: '1rem',
                            fontSize: 'clamp(0.9rem, 2vw, 1.125rem)'
                        }} c="#ffffff">
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
                            <List.Item style={{
                                color: 'white',
                                fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)'
                            }}>
                                <b>WordPress Developer</b> – Built fast,
                                responsive, and SEO-friendly WordPress websites with custom themes, plugins, and real client experience.
                            </List.Item>
                            <List.Item style={{
                                color: 'white',
                                fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)'
                            }}>
                                <b>React Developer</b> – Create modern, high-performance React apps using reusable components and clean, scalable code.
                            </List.Item>
                        </List>

                        <Group mt={30} gap="sm" style={{ flexWrap: 'wrap' }}>
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
                    <Image
                        src={image}
                        style={{
                            flex: '1 1 100%',
                            maxWidth: '500px',
                            width: '100%',
                            padding: '1rem',
                            borderRadius: '25px',
                            objectFit: 'cover'
                        }}
                    />
                </div>
            </Container>
        </div>
    );
}

// ===================== MY STORY SECTION =====================
export function HeroTitle() {
    return (
        <div style={{
            width: '100%',
            backgroundColor: '#070F2B',
            display: 'flex',
            justifyContent: 'center',
            padding: '3rem 1rem'
        }}>
            <Container size="md" style={{ textAlign: 'center', maxWidth: '800px' }}>
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
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        color: '#ffffff',
                        textAlign: 'center',
                        lineHeight: 1.8
                    }}
                >
                    I'm a Full Stack Web Developer with 2+ years of experience building fast, scalable,
                    and user-focused web applications. I specialize in WordPress development,
                    turning Figma designs into high-performance websites using modern tools and clean code.
                    I also have strong knowledge of React and actively build projects with it, focusing on reusable components
                    and smooth user experiences. I've worked with teams and clients across Pakistan, Dubai, and Saudi Arabia,
                    delivering reliable digital solutions that make an impact.
                </Text>
            </Container>
        </div>
    );
}

// ===================== EXPERIENCE DATA =====================
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
        duration: "05/2023 - 02/2024",
        points: [
            "Developed and shipped highly interactive web Apps WordPress, Elementor Pro, and custom coding",
            "Optimized website performance, SEO, and responsiveness for better user experience",
            "Collaborated with designers and backend developers to deliver seamless digital solutions",
        ],
    },
    {
        company: "Solution Fzco",
        role: "WordPress Developer @ Solution Fzco",
        duration: "03/2024 - 08/2024",
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

// ===================== EXPERIENCE SECTION =====================
export default function ExperienceSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div id='experience' style={{
            width: '100%',
            backgroundColor: '#070F2B',
            display: 'flex',
            justifyContent: 'center',
            padding: '3rem 1rem'
        }}>
            <Box style={{
                maxWidth: 1000,
                width: '100%',
                padding: "60px 20px",
                backgroundColor: "#ffffff",
                borderRadius: 8
            }}>
                <Title order={2} style={{ marginBottom: 40, color: "#18A5C6" }}>
                    Experience<span style={{ color: "#121213" }}>.</span>
                </Title>

                <Group align="flex-start" gap={50} style={{ flexWrap: 'wrap' }}>
                    {/* LEFT SIDE – COMPANY LIST */}
                    <Box style={{ position: "relative", minWidth: 150, flex: '0 0 auto' }}>
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
                                </Text>
                            ))}
                        </Stack>
                    </Box>

                    {/* RIGHT SIDE – DETAILS */}
                    <Box style={{ flex: 1, minWidth: '250px' }}>
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
                                    <Text size="sm" style={{ color: "#000000", flex: 1 }}>{point}</Text>
                                </Group>
                            ))}
                        </Stack>
                    </Box>
                </Group>
            </Box>
        </div>
    );
}

// ===================== SKILLS DATA =====================
const mockdata = [
    {
        title: 'Wordpress Development',
        description: 'I specialize in building high-performance, SEO-friendly WordPress websites using Elementor Pro, Gutenberg, and custom themes. I convert Figma designs into responsive, pixel-perfect websites, optimize performance, and ensure scalability for real-world business needs',
        icon: IconCode,
    },
    {
        title: 'React Development',
        description: 'I build modern, component-based React applications with a focus on clean UI, reusable components, and performance. I have strong knowledge of React fundamentals and actively develop projects using modern frontend practices.',
        icon: IconBrandReact,
    },
    {
        title: 'Shopify Development',
        description: 'I develop and customize Shopify stores with a focus on clean design, smooth user experience, and conversion optimization. My work includes theme customization, store setup, and ensuring responsive, fast-loading eCommerce solutions.',
        icon: IconShoppingCart,
    },
];

// ===================== SKILLS SECTION =====================
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
            <Text size="lg" fw={500} mt="md" style={{ color: '#18A5C6' }}>
                {feature.title}
            </Text>
            <Text size="sm" mt="sm">
                {feature.description}
            </Text>
        </Card>
    ));

    return (
        <div id="skills" style={{
            width: '100%',
            backgroundColor: '#070F2B',
            display: 'flex',
            justifyContent: 'center',
            padding: '3rem 1rem'
        }}>
            <Container size="xl" style={{ width: '100%', maxWidth: '1200px' }}>
                <Title
                    order={2}
                    style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                        fontWeight: 700,
                        color: '#18A5C6',
                        textAlign: 'center',
                        marginBottom: '3rem'
                    }}
                >
                    Skills
                </Title>

                <SimpleGrid
                    cols={{ base: 1, md: 3 }}
                    spacing="xl"
                >
                    {features}
                </SimpleGrid>
            </Container>
        </div>
    );
}

// ===================== CONTACT DATA =====================
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
                <Text style={{ color: 'white', fontSize: '0.95rem' }}>
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
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('idle');

        try {
            // Replace these with your EmailJS credentials
            const result = await emailjs.send(
                'service_kxi21a3',      // Replace with your Service ID
                'template_9g19a4a',     // Replace with your Template IDnp
                formData,
                'JV-gDhr-ZcNH9Pqhm'       // Replace with your Public Key
            );

            console.log('Email sent successfully:', result.text);
            setStatus('success');

            // Clear form
            setFormData({
                from_name: '',
                from_email: '',
                message: ''
            });

            // Reset success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Email send failed:', error);
            setStatus('error');

            // Reset error message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div id="contact" style={{
            width: '100%',
            backgroundColor: '#070F2B',
            display: 'flex',
            justifyContent: 'center',
            padding: '4rem 1rem',
            minHeight: '100vh'
        }}>
            <Container size="lg" style={{ width: '100%', maxWidth: '1200px' }}>
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
                                fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                                lineHeight: 1.6
                            }}
                        >
                            Leave your email and we will get back to you within 24 hours
                        </Text>
                        <ContactIconsList />
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                            <TextInput
                                label="Email"
                                name="from_email"
                                type="email"
                                placeholder="your@email.com"
                                required
                                radius="md"
                                value={formData.from_email}
                                onChange={handleChange}
                                styles={{
                                    input: {
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        color: 'white',
                                        '&::placeholder': { color: '#9ca3af' },
                                        '&:focus': { borderColor: '#38BDF8' }
                                    },
                                    label: { color: 'white', fontWeight: 500, marginBottom: '0.5rem' }
                                }}
                            />
                            <TextInput
                                label="Name"
                                name="from_name"
                                placeholder="Ali Khan"
                                required
                                mt="md"
                                radius="md"
                                value={formData.from_name}
                                onChange={handleChange}
                                styles={{
                                    input: {
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        color: 'white',
                                        '&::placeholder': { color: '#9ca3af' },
                                        '&:focus': { borderColor: '#38BDF8' }
                                    },
                                    label: { color: 'white', fontWeight: 500, marginBottom: '0.5rem' }
                                }}
                            />
                            <Textarea
                                required
                                label="Your message"
                                name="message"
                                placeholder="I want to hire you for..."
                                minRows={4}
                                mt="md"
                                radius="md"
                                value={formData.message}
                                onChange={handleChange}
                                styles={{
                                    input: {
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        color: 'white',
                                        '&::placeholder': { color: '#9ca3af' },
                                        '&:focus': { borderColor: '#38BDF8' }
                                    },
                                    label: { color: 'white', fontWeight: 500, marginBottom: '0.5rem' }
                                }}
                            />

                            {status === 'success' && (
                                <Text style={{ color: '#10b981', marginTop: '1rem', textAlign: 'center' }}>
                                    ✓ Message sent successfully!
                                </Text>
                            )}

                            {status === 'error' && (
                                <Text style={{ color: '#ef4444', marginTop: '1rem', textAlign: 'center' }}>
                                    ✗ Failed to send message. Please try again.
                                </Text>
                            )}

                            <Group justify="flex-end" mt="md">
                                <Button
                                    type="submit"
                                    radius="md"
                                    loading={isLoading}
                                    disabled={isLoading}
                                    style={{
                                        backgroundColor: isLoading ? '#9ca3af' : '#38BDF8',
                                        color: '#070F2B',
                                        fontWeight: 600,
                                        padding: '0.75rem 2rem',
                                        transition: 'all 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isLoading) {
                                            e.currentTarget.style.backgroundColor = '#0EA5E9';
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isLoading) {
                                            e.currentTarget.style.backgroundColor = '#38BDF8';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }
                                    }}
                                >
                                    {isLoading ? 'Sending...' : 'Send message'}
                                </Button>
                            </Group>
                        </div>
                    </form>
                </SimpleGrid>
            </Container>
        </div>
    );
}