import {
  reactExtension,
  Text,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension('purchase.checkout.block.render', () => <AdvanceMessage />);

function AdvanceMessage() {
  const fallbackMessage = 'Pay ₹50 in advance to confirm your COD order.';
  return (
    <Text appearance="subdued">
      {fallbackMessage}
    </Text>
  );
}