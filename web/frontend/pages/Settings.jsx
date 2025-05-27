import React, { useState, useEffect } from 'react';
import {
  Page,
  Layout,
  TextField,
  FormLayout,
  Button,
  Card,
} from '@shopify/polaris';

export default function SettingsPage() {
  const [advanceAmount, setAdvanceAmount] = useState('50');
  const [customText, setCustomText] = useState('Pay ₹50 in advance to confirm your COD order.');

  const handleSave = async () => {
    await fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ advanceAmount, customText }),
    });
    alert('Settings saved');
  };

  return (
    <Page title="COD Advance Settings">
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <FormLayout>
              <TextField
                label="Advance Amount (₹)"
                value={advanceAmount}
                onChange={setAdvanceAmount}
                type="number"
              />
              <TextField
                label="Custom Text for Users"
                value={customText}
                onChange={setCustomText}
                multiline
              />
              <Button primary onClick={handleSave}>Save Settings</Button>
            </FormLayout>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}