## DNS SCRIPT ##

# Option 1 #
function GetDnsServers {
    $currentDnsServers = Get-DnsClientServerAddress -InterfaceAlias "Ethernet" -AddressFamily IPv4
    
    $results = @()

    # Test connection of each server
    foreach ($dns in $currentDnsServers.ServerAddresses) {
        $ping = Test-Connection -ComputerName $dns -Count 1 -ErrorAction SilentlyContinue

        if ($ping) {
            $results += [PSCustomObject]@{
                DnsServer = $dns
                Status = "Online"
            }
        } else {
            $results += [PSCustomObject]@{
                DnsServer = $dns
                Status = "Offline"
            }
        }
    }

    $results | Format-Table -AutoSize
}

# Option 2 #
function ChangeDnsServer {
    # Get Current Servers
    $currentDnsServers = Get-DnsClientServerAddress -InterfaceAlias "Ethernet" -AddressFamily IPv4
    Write-Host "Current DNS servers:"
    Write-Host $currentDnsServers.ServerAddresses
   

    # Prompt Custom Servers
    $dnsServers = @("8.8.8.8", "1.1.1.1", "9.9.9.9")
    Write-Host "Available servers:"
    for ($i = 0; $i -lt $dnsServers.Length; $i++) {
        Write-Host "$($i+1): $($dnsServers[$i])"
    }

    # Choose Server
    $choice = Read-Host "Choose a server"
    if ($choice -in 1..$dnsServers.Length) {
        $selectedDns = $dnsServers[$choice - 1]

        Write-Host "Changing DNS server to $selectedDns"
        Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ServerAddresses $selectedDns

        Write-Host "DNS changed"
    } else {
        Write-Host "WRONG! Your name is PRIESTESS!"
    }
}

# Option 3 #
function CreateDnsSave {
    Write-Host "1: A"
    $type = Read-Host "Choose Type"

    switch($type) {
        1 {
            Invoke-Command -ComputerName DC1 -scriptblock {
                $name = Read-Host "Name"
                $ip = Read-Host "IPv4"

                Add-DnsServerResourceRecordA -Name $name -IPv4Address $ip -ZoneName "learn.local"
             }
          }
        default { 
                  Write-Host "The best I can do is A"
                  return
                  }
    }

    Write-Host "Save created"
}

# Option 4 #
function TestDnsSave {
    Write-Host "1: IP to name"
    Write-Host "2: Name to IP"
    $choice = Read-Host "Choose option"

    switch($choice) {
        # IP to name
        1 {
            Invoke-Command -ComputerName DC1 -scriptblock {
                $ip = Read-Host "IP"

                Resolve-DnsName -Server $ip
            }
        }
        # Name to IP
        2 {
            Invoke-Command -ComputerName DC1 -scriptblock {
                $name = Read-Host "Name"

                Resolve-DnsName -Name $name
            }
        }
        # Default
        default {
            Write-Host "CAN'T YOU DO ANYTHING RIGHT?"
            return
        }
    }
}

# Option 5 #
function RemoveDnsSave {
    Invoke-Command -ComputerName DC1 -scriptblock {
        $name = Read-Host "Name"

        Remove-DnsServerResourceRecord -ZoneName "learn.local" -Name $name -RRType "A"
    }
}

# Option 6 #
function ShowLog {
    Write-Host "Last 5 errors:"
    Get-Eventlog -Logname System -EntryType Error -Newest 5 -Source "Microsoft-Windows-DNS-Client" | fl
}

# Main Menu #
function ShowMenu {
    Clear-Host
    Write-Host "Choose an option:"
    Write-Host "1: Get DNS servers"
    Write-Host "2: Change DNS server"
    Write-Host "3: Create a DNS save"
    Write-Host "4: Test a DNS save"
    Write-Host "5: Delete a DNS save"
    Write-Host "6: Show error log"
}

# Main #
do {
    ShowMenu
    $choice = Read-Host "Enter an option (1-6)"

    switch($choice) {
        1 { GetDnsServers }
        2 { ChangeDnsServer }
        3 { CreateDnsSave }
        4 { TestDnsSave }
        5 { RemoveDnsSave }
        6 { ShowLog }
        default { Write-Host "I said 1-6..." }
    }

    $continue = Read-Host "Wanna continue? (y/n)"
} while ($continue -eq 'y')