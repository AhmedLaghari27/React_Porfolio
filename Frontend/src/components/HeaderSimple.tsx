import { useState, useEffect } from 'react';
import { Anchor, Burger, Container, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const links = [
    { link: 'hero', label: 'Home' },
    { link: 'skills', label: 'Skills' },
    { link: 'experience', label: 'Experience' },
    { link: 'contact', label: 'Contact' },
];

export function HeaderSimple() {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    // Auto detect which section is in view
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            for (let i = links.length - 1; i >= 0; i--) {
                const section = document.getElementById(links[i].link);
                if (section && scrollY >= section.offsetTop - 100) {
                    setActive(links[i].link);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActive(id);
        }
    };

    const items = links.map((link) => (
        <Anchor
            key={link.label}
            href={`#${link.link}`}
            underline="never"
            px="sm"
            py="xs"
            fw={500}
            fz="sm"
            style={{
                color: active === link.link ? '#38BDF8' : '#ffffff',
                transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => {
                if (active !== link.link) {
                    e.currentTarget.style.color = '#E5E7EB';
                }
            }}
            onMouseLeave={(e) => {
                if (active !== link.link) {
                    e.currentTarget.style.color = '#9ca3af';
                }
            }}
            onClick={(event) => {
                event.preventDefault();
                handleNavClick(link.link);
            }}
        >
            {link.label}
        </Anchor>
    ));

    return (
        <div style={{
            backgroundColor: 'rgba(7, 15, 43, 0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            padding: '1rem 0'
        }}>
            <Container size="md" h="100%">
                <Group justify="space-between" h="100%" align="center">
                    <Text
                        fw={700}
                        fz="lg"
                        style={{
                            color: 'white',
                            letterSpacing: '-0.5px',
                            fontFamily: 'Outfit, sans-serif',
                            cursor: 'pointer'
                        }}
                        onClick={() => handleNavClick('hero')}
                    >
                        Ahmed<span style={{ color: '#38BDF8' }}>Laghari</span>
                    </Text>

                    <Group gap={5} visibleFrom="xs">
                        {items}
                    </Group>

                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="xs"
                        size="sm"
                        color="white"
                    />
                </Group>
            </Container>
        </div>
    );
}