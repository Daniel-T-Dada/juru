


import { ThemedText } from '@/components/ThemedText';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import { FILTERS } from '@/constants/activities';
import { useTheme } from '@/hooks/use-theme';


interface ActivityFilterProps {
    activeFilter: string;
    setActiveFilter: (filter: string) => void;
}

const ActivityFilter = ({activeFilter, setActiveFilter}: ActivityFilterProps) => {
    const theme = useTheme();
    
    return (
        <View>
            <View style={styles.filterContainer}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={FILTERS}
                    keyExtractor={(item) => item}
                    contentContainerStyle={{ gap: 10, paddingHorizontal: 20 }}
                    renderItem={({ item }) => {
                        const isActive = activeFilter === item;
                        return (
                            <TouchableOpacity
                                onPress={() => setActiveFilter(item)}
                                activeOpacity={0.9}
                                style={[
                                    styles.filterPill,
                                    {
                                        backgroundColor: isActive ? theme.primary : theme.card,
                                        borderColor: isActive ? theme.primary : theme.border,
                                        borderWidth: 1
                                    }
                                ]}
                            >
                                <ThemedText
                                    style={{
                                        color: isActive ? theme.muted : theme.foreground,
                                        fontWeight: isActive ? 'bold' : 'normal'
                                    }}
                                >
                                    {item}
                                </ThemedText>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
        </View>
    )
}
export default ActivityFilter
const styles = StyleSheet.create({
    filterContainer: {
        marginBottom: 16,
    },
    filterPill: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
    },
})