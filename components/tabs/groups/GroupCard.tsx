

import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useTheme } from '@/hooks/use-theme';
import { Ionicons } from '@expo/vector-icons';
import { Group } from '@/constants/groups';
import { Href, useRouter } from 'expo-router';

interface GroupCardProps {
  groups: Group[];
}

const GroupCard = ({ groups }: GroupCardProps) => {
  const theme = useTheme();
  const router = useRouter()
  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: theme.card }]}
            activeOpacity={0.7}
            onPress={() => router.push(`/group/${item.id}` as Href)}
          >

            
            <View style={styles.cardHeader}>
              <View style={styles.headerTextContainer}>
                <ThemedText type="defaultSemiBold" style={styles.groupName} numberOfLines={1}>
                  {item.name}
                </ThemedText>
                <ThemedText type="muted" style={styles.cycleText}>
                  {item.cycle}
                </ThemedText>
              </View>

              <View style={[styles.memberBadge, { backgroundColor: `${theme.primary}20` }]}>
                <Ionicons name="people" size={14} color={theme.primary} />
                <ThemedText style={{ fontSize: 14, color: theme.primary, fontWeight: 'bold' }}>
                  {item.members}
                </ThemedText>
              </View>
            </View>

           
            <View style={styles.amountsRow}>
              <View>
                <ThemedText type="muted" style={styles.amountLabel}>
                  Contribution ({item.plan})
                </ThemedText>
                <ThemedText type="defaultSemiBold" style={styles.amountValue}>
                  ₦{item.contributionAmount.toLocaleString()}
                </ThemedText>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <ThemedText type="muted" style={styles.amountLabel}>
                  Total Payout
                </ThemedText>
                <ThemedText type="defaultSemiBold" style={[styles.amountValue, { color: theme.primary }]}>
                  ₦{item.payoutAmount.toLocaleString()}
                </ThemedText>
              </View>
            </View>

          
            <View style={[styles.footer, { borderTopColor: theme.border }]}>
              <View style={styles.footerLeft}>
                <Ionicons name="calendar-outline" size={16} color={theme.mutedForeground} />
                <ThemedText type="muted" style={styles.footerText}>
                  Next: <ThemedText type="defaultSemiBold" style={styles.highlightText}>{item.nextPayout}</ThemedText>
                </ThemedText>
              </View>

              <View style={[styles.statusBadge, { backgroundColor: `${theme.success}20` }]}>
                <ThemedText style={{ color: theme.success, fontSize: 12, fontWeight: 'bold' }}>
                  {item.status}
                </ThemedText>
              </View>
            </View>

          </TouchableOpacity>
        )}
      />
    </ThemedView>
  )
}
export default GroupCard
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    gap: 16,
  },
  card: {
    padding: 16,
    borderRadius: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  headerTextContainer: {
    flex: 1,
    marginRight: 12,
  },
  groupName: {
    fontSize: 18,
    marginBottom: 4,
  },
  cycleText: {
    fontSize: 14,
  },
  memberBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 6,
  },
  amountsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  amountLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  amountValue: {
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    borderTopWidth: 1,
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
    marginRight: 10,
  },
  footerText: {
    fontSize: 13,
  },
  highlightText: {
    fontSize: 13,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
})