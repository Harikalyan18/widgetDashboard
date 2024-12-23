import React, { useState } from "react";
import { Container, Card, Text, Image, Center } from "@mantine/core";

const Dashboard = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");

    const categories = [
        { id: "Entertainment", icon: "🎬", name: "Entertainment" },
        { id: "Commerce", icon: "🛒", name: "Commerce" },
        { id: "Communications", icon: "💬", name: "Communications" },
        { id: "Banking", icon: "🏦", name: "Banking" },
        { id: "Social Media", icon: "📱", name: "Social Media" },
    ];

    const locations = [
        { name: "Singapore", flag: "https://flagcdn.com/w320/sg.png" },
        { name: "Mumbai", flag: "https://flagcdn.com/w320/in.png" },
        { name: "Dubai", flag: "https://flagcdn.com/w320/ae.png" },
        { name: "Chicago", flag: "https://flagcdn.com/w320/us.png" },
        { name: "Paris", flag: "https://flagcdn.com/w320/fr.png" },
        { name: "Tokyo", flag: "https://flagcdn.com/w320/jp.png" },
        { name: "London", flag: "https://flagcdn.com/w320/gb.png" },
    ];

    const volumetrics = [
        { title: "Tests", description: "Total number of journey executions completed", value: "2,160" },
        { title: "Devices", description: "Number of devices where journeys were executed", value: "1" },
        { title: "Locations", description: "Number of locations where journeys were executed", value: "1" },
        { title: "Journeys", description: "Number of journeys executed", value: "1" },
    ];

    const widgetStyles = {
        marginBottom: "32px",
        padding: "24px",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        background: "#fafafa",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    };

    const singleLineStyles = {
        display: "flex",
        gap: "24px",
        justifyContent: "center",
        flexWrap: "nowrap",
        overflowX: "auto",
        padding: "16px 0",
    };

    const cardStyles = {
        flex: "1 1 200px",
        maxWidth: "280px",
        textAlign: "center",
        cursor: "pointer",
        background: "white",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "16px",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
    };

    const cardHoverStyles = {
        transform: "scale(1.1)",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
    };

    const titleStyles = {
        fontWeight: 700,
        fontSize: "24px",
        marginBottom: "16px",
    };

    return (
        <Container size="lg" p="md">
            {/* Category Widget */}
            <div style={widgetStyles}>
                <Text align="center" style={titleStyles}>
                    SELECT CATEGORY
                </Text>
                <div style={singleLineStyles}>
                    {categories.map((category) => (
                        <Card
                            key={category.id}
                            withBorder
                            radius="md"
                            shadow={selectedCategory === category.id ? "sm" : "none"}
                            style={{
                                ...cardStyles,
                                backgroundColor: selectedCategory === category.id ? "#f0f8ff" : "white",
                            }}
                            onClick={() => setSelectedCategory(category.id)}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                        >
                            <Text size="xl" mb="xs">
                                {category.icon}
                            </Text>
                            <Text align="center" weight={500} size="sm">
                                {category.name}
                            </Text>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Location Widget */}
            <div style={widgetStyles}>
                <Text align="center" style={titleStyles}>
                    SELECT LOCATION
                </Text>
                <div style={singleLineStyles}>
                    {locations.map((location) => (
                        <Card
                            key={location.name}
                            withBorder
                            radius="md"
                            shadow={selectedLocation === location.name ? "sm" : "none"}
                            style={{
                                ...cardStyles,
                                backgroundColor: selectedLocation === location.name ? "#f0f8ff" : "white",
                            }}
                            onClick={() => setSelectedLocation(location.name)}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                        >
                            <Image
                                src={location.flag}
                                alt={location.name}
                                width={40}
                                height={30}
                                style={{ margin: "0 auto", borderRadius: "4px" }}
                            />
                            <Text align="center" weight={500} size="sm">
                                {location.name}
                            </Text>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Volumetrics Widget */}
            <div style={widgetStyles}>
                <Text align="center" style={titleStyles}>
                    VOLUMETRICS
                </Text>
                <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "center", padding: "16px 0" }}>
                    {volumetrics.map((metric) => (
                        <Card
                            key={metric.title}
                            withBorder
                            radius="md"
                            shadow="sm"
                            p="md"
                            style={cardStyles}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                        >
                            <Text weight={500} size="sm" mb="xs">
                                {metric.title}
                            </Text>
                            <Text size="xs" color="dimmed" mb="sm">
                                {metric.description}
                            </Text>
                            <Text weight={700} size="lg">
                                {metric.value}
                            </Text>
                        </Card>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;
